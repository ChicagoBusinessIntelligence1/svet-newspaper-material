(function () {
    'use strict'
    angular.module('auth.user', ['ui.router', 'flow'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=user profile*/
                .state("app.user", {
                    abstract: true,
                    url: '/:uid',
                    resolve: {
                        userRights: function ($q, $stateParams, userPromise, userAuth) {
                            var routeUid = $stateParams.uid;
                            var userName = userAuth.profile.userName || userPromise.userName;
                            return $q(function (resolve, reject) {
                                if (userAuth && userAuth.profile.userName === routeUid) {
                                    resolve();
                                } else {
                                    reject('You do not have enough priviliges to view that page!');
                                }
                            })
                        }
                    },
                    controller: "UserCtrl as user",
                    templateUrl: "scripts/auth/user/views/userCtrl.html"
                })
                .state("app.user.dashboard", {
                    url: "/dashboard",
                    controller: "UserDashboardCtrl as userDashboard",
                    templateUrl: "scripts/auth/user/views/userDashboardCtrl.html"
                })
                .state("app.user.author-articles", {
                    url: "/articles",
                    controller: "AuthorArticlesCtrl as authorArticles",
                    templateUrl: "scripts/auth/user/views/author-articlesCtrl.html"
                })
                .state("app.user.author-drafts", {
                    url: "/author-drafts",
                    controller: "AuthorDraftsCtrl as authorDrafts",
                    templateUrl: "scripts/auth/user/views/author-draftsCtrl.html"
                })
                .state("app.user.profile-settings", {
                    url: "/profile-settings",
                    controller: "ProfileSettingsCtrl as profileSettings",
                    templateUrl: "scripts/auth/user/views/profile-settingsCtrl.html"
                })
                .state("app.user.social", {
                    url: "/social",
                    controller: "UserSocialCtrl as userSocial",
                    templateUrl: "scripts/auth/user/views/userSocialCtrl.html"
                })
//#state'
        });
})();
