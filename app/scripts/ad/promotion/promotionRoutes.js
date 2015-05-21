(function () {
    'use strict'
    angular.module('ad.promotion', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                /*=ad*/
                .state("app.user.ad", {
                    url: "/business-ad",
                    controller: "BusinessAdCtrl as businessAd",
                    templateUrl: "scripts/ad/promotion/views/business-adCtrl.html"
                })
                .state("app.user.ad.start", {
                    url: "/manage-campaign/:id",
                    controller: "StartCampaignCtrl as startCampaign",
                    templateUrl: "scripts/ad/promotion/views/start-campaignCtrl.html"
                })
				.state("app.new-promotion-by-manager", {
					url: "/new-promotion-by-manager/:id",
					controller:"NewPromotionByManagerCtrl",
					templateUrl: "scripts/ad/promotion/views/new-promotion-by-managerCtrl.html"
				})
//#state'
        });
})();
