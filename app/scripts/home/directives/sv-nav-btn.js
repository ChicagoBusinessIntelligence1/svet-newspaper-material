(function () {
    'use strict';

    angular.module('home')
        .directive('svNavBtn', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-nav-btn.html',
                scope: {
                    url: '@',
                    title: '@',
                    color: '@',
                    btnStyle: '@',
                    icon: '@'
                },
                bindToController: {},
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var ctrl = this;

                },

                link: function ($scope, el, attrs) {

                }
            };
        });
})();
