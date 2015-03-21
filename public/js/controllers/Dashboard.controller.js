(function() {
    'use strict';

    function DashboardController($scope, $timeout, ContactActionDialog, ContactService) {
        var _self = this;

        _self.contacts = ContactService.contacts;
        _self.openContactActionModal = ContactActionDialog.activate;

         _self.findAll = function() {
             ContactService.findAll();
         };

        _self.findAll();

        $scope.$on('saveContact', function(event, data) {
            _self.alertMessage = 'Contact ' + data.name + ' was saved successfully';

            $timeout(function() {
                _self.alertMessage = undefined;
            }, 3000);
        });

        $scope.$on('deleteContact', function(event, data) {
            _self.alertMessage = 'Contact ' + data.name + ' was deleted successfully';

            $timeout(function() {
                _self.alertMessage = undefined;
            }, 3000);
        });

        $scope.$on('updateContact', function(event, data) {
            _self.alertMessage = 'Contact ' + data.name + ' was updated successfully';

            $timeout(function() {
                _self.alertMessage = undefined;
            }, 3000);
        });
    }

    DashboardController.$inject = ['$scope', '$timeout', 'ContactActionDialog', 'ContactService'];

    angular.module('contactListApp')
        .controller('DashboardController', DashboardController);
})();