(function () {
    'use strict';
    angular.module('auth')
        .factory('ProfileServ', function ($q, url, users, $firebaseObject, $firebaseArray, $firebaseAuth) {
            var ref = new Firebase(users);
            var usersArr = $firebaseArray(ref);

            function createLocalProfile(email) {
                var credentials = {
                    email: email,
                    password: '123456'
                };
                return $q(function (resolve, reject) {
                    var authObj = $firebaseAuth(ref);
                    authObj.$createUser(credentials).then(function (userData) {
                        console.log('user has been created: ' + userData);
                        authObj.$resetPassword({email: email}).then(function () {
                            resolve(userData.uid);
                        })
                    }).catch(function (error) {
                        console.error(error);
                        reject(error);
                    })
                });
            }

            function saveProfileToDb(authData) {
                return $q(function (resolve, reject) {
                    var user = userProcess(authData);
                    usersArr.$add(user).then(function (ref) {
                        createLocalProfile(user.profile.email).then(function (localUid) {
                            resolve(localUid);
                        }).catch(function (error) {
                            console.error(error);
                            reject(error);
                        })
                    })
                });
            }

            function userNameProcess(displayName) {
                var procName = displayName.toLowerCase();
                procName = procName.replace(/ +?/g, '-');
                return procName;
            }

            function getGoogle(user, authData) {
                user.profile.email = authData.google.email;
                user.profile.userName = userNameProcess(authData.google.displayName);
                user.profile.avatar = authData.google.cachedUserProfile.picture;
                user.auth = {google: authData.google};
            }

            function getFacebook(user, authData) {
                user.profile.email = authData.facebook.email;
                user.profile.userName = userNameProcess(authData.facebook.displayName);
                user.profile.avatar = authData.facebook.cachedUserProfile.picture.data.url;
                user.auth = {facebook: authData.facebook};
            }

            function getSvet(user, authData) {
                user.profile.email = authData.email;
                user.profile.userName = authData.userName
                user.auth = {svet: authData};
            }

            function userProcess(authData) {
                var user = {};
                user.profile = {};
                if (authData.provider === 'google') {
                    getGoogle(user, authData);
                }
                if (authData.provider === 'facebook') {
                    getFacebook(user, authData);
                }
                if (!authData.provider) {
                    getSvet(user, authData);
                }
                return user;
            }

            function findProfile(authData) {
                return $q(function (resolve, reject) {
                    usersArr.$loaded().then(function () {
                        resolve(null);
                    }).catch(function (error) {
                        reject(error);
                    })
                });
            }

            return {
                getProfile: function (authData) {
                    return $q(function (resolve, reject) {
                        findProfile(authData).then(function (dbProfile) {
                            if (!dbProfile) {
                                saveProfileToDb(authData).then(function (key) {
                                    resolve(key);
                                    console.log(key);
                                })
                            }
                        });
                    });
                },
                createSvetUser: function (email, password, userName) {
                    var authObj = $firebaseAuth(ref);
                    return $q(function (resolve, reject) {
                        authObj.$createUser({
                            email: email,
                            password: password
                        }).then(function (authData) {
                            authData.userName = userName;
                            authData.email = email;
                            saveProfileToDb(authData)
                            resolve(authData);
                        }).catch(function (error) {
                            reject(error);
                        })
                    });
                }
            };
        });
})();
