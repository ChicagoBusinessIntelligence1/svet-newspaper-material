(function () {
    'use strict';

    angular.module('auth')
        .factory('AuthServ', function (UserGroupsServ, $firebaseAuth, $firebaseObject, url, $q, $rootScope) {

            var mainRef = new Firebase(url);

            function processUserFb(data) {
                var user = {};
                user.id = data.facebook.cachedUserProfile.id;
                user.fname = data.facebook.cachedUserProfile.first_name;
                user.lname = data.facebook.cachedUserProfile.last_name;
                user.url = data.facebook.cachedUserProfile.link;
                user.avatar = data.facebook.cachedUserProfile.picture.data.url;
                return user;
            }

            function processUserGoogle(data) {
                var user = {};
                user.id = data.google.cachedUserProfile.id;
                user.fname = data.google.cachedUserProfile.given_name;
                user.lname = data.google.cachedUserProfile.family_name;
                user.url = data.google.cachedUserProfile.link;
                user.avatar = data.google.cachedUserProfile.picture;
                return user;
            }

            function processUserPassword(user) {
                var email = user.password.email;

                var at = email.indexOf('@');
                var userLogin = email.substring(0, at);
                user = _.extend(user, {
                    login: userLogin,
                    name: 'Alex',
                    avatar: 'img/auth/author.png'
                });
                if (user.uid) {
                    user.id = user.uid

                }

                return user;
            }

            return {
                getObj: function () {
                    return $firebaseAuth(mainRef);
                },
                authProvider: function (provider) {
                    var deferred = $q.defer();

                    this.getObj().$authWithOAuthPopup(provider).then(function (data) {
                        if (provider === 'facebook') {
                            var user = processUserFb(data);
                        }
                        if (provider === 'google') {
                            var user = processUserGoogle(data);
                        }
                        if (provider === 'password') {
                            var user = processUserPassword(data);
                        }
                        if (!_.isNull(user)) {
                            UserGroupsServ.getGroups(user.id).then(function (groups) {
                                user.groups = groups
                                deferred.resolve(user);
                            });
                        }
                    }).catch(function (error) {
                        deferred.reject();
                        console.log(error);

                    })

                    return deferred.promise;

                },
                loginPassword: function (email, password) {
                    var deferred = $q.defer();

                    this.getObj().$authWithPassword({
                        email: email,
                        password: password
                    }).then(function (authData) {
                        var user = processUserPassword(authData);

                        if (_.isNull(user)) {
                            deferred.resolve(null);
                        } else {
                            UserGroupsServ.getGroups(user.id).then(function (groups) {
                                user.groups = groups
                                deferred.resolve(user);
                            }).catch(function (error) {
                                console.log(error);
                            });
                        }

                        deferred.resolve(user);
                    }).catch(function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                },

                logout: function () {
                    $rootScope.user = null;

                    var authObj = this.getObj();
                    authObj.$unauth();

                },

                getUser: function () {
                    var deferred = $q.defer();

                    var user;
                    var data = this.getObj().$getAuth();

                    if (data) {
                        if (data.google) {
                            user = processUserGoogle(data);
                        }

                        if (data.facebook) {
                            user = processUserFb(data);
                        }

                        if (data.password) {
                            user = processUserPassword(data);
                        }

                    } else {

                        user = null;
                    }


                    if (_.isNull(user)) {
                        deferred.resolve(null);
                    } else {
                        UserGroupsServ.getGroups(user.id).then(function (groups) {
                            user.groups = groups
                            deferred.resolve(user);
                        }).catch(function (error) {
                            console.log(error);
                        });
                    }

                    return deferred.promise;
                },

                createUser: function (email, password) {
                    var that = this;

                    var deferred = $q.defer();

                    var newUser = this.getObj().$createUser({email: email, password: password});

                    newUser.then(function () {

                        that.getObj().$authWithPassword({
                            email: email,
                            password: password
                        }).then(function (authData) {
                            var at = email.indexOf('@');
                            var userLogin = email.substring(0, at);
                            authData = _.extend(authData, {
                                email: email,
                                login: userLogin,
                                avatar: 'img/auth/user.png'
                            });
                            deferred.resolve(authData);
                        }).catch(function (error) {
                            deferred.reject(error);
                            console.error("Error: ", error);
                        });


                    })


                    return deferred.promise;
                }

            };
        });
})
();
