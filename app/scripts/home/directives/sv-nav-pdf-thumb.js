(function () {
    'use strict';

    angular.module('home')
        .directive('svNavPdfThumb', function () {
            return {
                replace: true,
                templateUrl: 'scripts/home/directives/sv-nav-pdf-thumb.html',
                scope: {

                },
                link: function ($scope, el, attrs) {

                }
            };
        });
})();
