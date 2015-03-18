(function() {
    'use strict';

    function DashboardController($timeout, ContactCreatorDialog, ContactService) {
        var _self = this,
            promise;

        _self.hasAlertVisible = false;
        _self.openCreateContactModal = ContactCreatorDialog.activate;

         _self.findAll = function() {
             promise = ContactService.findAll();

             promise.then(
                 function (contacts) {
                    _self.contacts = contacts;
                 },
                 function (reason) {
                    alert('Failed: ' + reason);
                 });
         };

        _self.findAll();
    }

    DashboardController.$inject = ['$timeout', 'ContactCreatorDialog', 'ContactService'];

    angular.module('contactListApp')
        .controller('DashboardController', DashboardController);

})();