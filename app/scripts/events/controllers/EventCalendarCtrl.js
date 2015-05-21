(function () {
    'use strict';
    angular.module('events')
        .controller('EventCalendarCtrl', function ($scope,$modal,$templateCache) {
            $templateCache.put('modalContent.html','<div class="modal-header"> ' +
                '<h3 class="modal-title">Event action occurred!</h3> ' +
                '</div> <div class="modal-body"> <p>Action: <pre>{{ action }}</pre></p> <p>Event: <pre>{{ event | json }}</pre></p> ' +
                '</div> <div class="modal-footer"> <button class="btn btn-primary" ng-click="$modalInstance.close()">OK</button> </div>');



        });
})();

