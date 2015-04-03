(function () {
    'use strict';

    angular.module('article')
        .directive('svComments', function ($rootScope) {
            return {
                replace: true,
                templateUrl: 'scripts/article/directives/sv-comments.html',
                scope: {},
                bindToController: {
                    comments: '=',
                    key:'='
                },
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },
                link: function ($scope, el, attrs) {
                }
            };
        });
})();
