(function () {
    'use strict';

    angular.module('auth')
        .factory('ConnectionEventServ', function ($q, url, $firebaseArray) {
            var eventsUrl = url + '/events/corporate/';

            return {

                saveEvent: function (event) {
                    return $q(function (resolve, reject) {
                        var eventsArray = $firebaseArray(new Firebase(eventsUrl));
                        eventsArray.$add(event).then(function (uid) {
                            resolve(uid);
                        });
                    });
                }
            };
        });
})();
