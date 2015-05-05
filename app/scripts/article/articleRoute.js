(function () {
    'use strict'
    angular.module('article', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=article*/
                .state("app.article", {
                    url: "/article/:id",
                    controller: "ArticleCtrl as article",
                    templateUrl: "views/articleCtrl.html"
                })
                .state("app.user.create-article", {
                    url: "/create-article",
                    controller: "CreateArticleCtrl as createArticle",
                    templateUrl: "views/create-articleCtrl.html"
                })
                .state("app.svet-recommends", {
                    url: "/svet-recommends",
                    controller: "SvetRecommendsCtrl as svetRecommends",
                    templateUrl: "scripts/article/views/svet-recommendsCtrl.html"
                })
        });
})();

