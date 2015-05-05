(function () {
    'use strict';
    angular.module('ad.promotion')
        .directive('svStartCampaignForm', function (AdServ, $state, toastr) {
            return {
                templateUrl: '/sv-start-campaign-form.html',
                scope: {
                    id: '='
                },
                link: function ($scope, el, attrs) {
                    if (!$scope.id) {
                        $scope.ad = {
                            name: "Ad Campaign " + _.random(1, 99),
                            place: _.random(0, 1) === 1 ? "home.top" : "home.middle",
                            banner: ""
                        }
                    }
                    else {
                        $scope.ad = AdServ.getObj($scope.id);
                    }
                    $scope.addBusinessAd = function (ad, file) {
                        if (!file) {
                            if ($scope.id) {
                                AdServ.updateAd($scope.ad).then(function (key) {
                                    $state.go('^');
                                    toastr.info('Your Ad Campaign has been saved');
                                });
                            } else {
                                AdServ.saveAd($scope.ad).then(function (key) {
                                    $state.go('^');
                                    toastr.info('Your Ad Campaign has been saved');
                                });
                            }
                            return;
                        }
                        var fileReader = new FileReader();
                        fileReader.readAsDataURL(file.file);
                        fileReader.onload = function (event) {
                            $scope.ad.banner = event.target.result;
                            if ($scope.id) {
                                AdServ.updateAd($scope.ad).then(function (key) {
                                    $state.go('^');
                                    toastr.info('Your Ad Campaign has been saved');
                                });
                            } else {
                                AdServ.saveAd($scope.ad).then(function (key) {
                                    $state.go('^');
                                    toastr.info('Your Ad Campaign has been saved');
                                });
                            }
                        };
                    };
                }
            };
        });
})();