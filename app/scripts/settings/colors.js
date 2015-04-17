(function () {
    angular.module('app').config(function ($mdThemingProvider) {
        $mdThemingProvider.definePalette('newspaper', {
            '50': 'FAF7F2',
            '100': 'F0EBE1',
            '200': 'C4BEB5',
            '300': 'F0E9E1',
            '400': 'C4BAAB',
            '500': '8C7769',
            '600': '7A685C',
            '700': '63554B',
            '800': '4F433B',
            '900': '38302A',
            'A100': 'FAFAF5',
            'A200': 'F5E9DA',
            'A400': 'F5E9DA',
            'A700': 'F5E9DA',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });
        $mdThemingProvider.theme('default')
            .primaryPalette('newspaper', {
                'default': '400',
                'hue-1': '100',
                'hue-2': '600'
            })
            .accentPalette('red', {
                'default': '600',
                'hue-1': '500'
            })
            .warnPalette('red', {
                'default': '600',
                'hue-1': '500'
            })
            .backgroundPalette('newspaper', {
                'default': '50'
            })
    });
})();

