(function () {
    'use strict';

    angular.module('home')
        .directive('svNewsGrid', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-news-grid.html',
                scope: {},
                bindToController: {
                    sectionNews: '='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;
                    ctrl.newsGrid = ctrl.sectionNews || $rootScope.newsGrid;
                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
