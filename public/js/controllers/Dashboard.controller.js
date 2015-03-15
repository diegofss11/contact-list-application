(function() {
    'use strict';

    function DashboardController ($modal, $timeout, ContactCreatorDialog, ContactService) {
        var _self = this;

        _self.hasAlertVisible = false;
        _self.openCreateContactModal = ContactCreatorDialog.activate;
        _self.closeCreateContactModal = ContactCreatorDialog.deactivate;

        _self.addContact = function () {

        //    $modal.open({
        //        controller: 'ContactModalInstanceController',
        //        controllerAs: 'vmContactModal',
        //        templateUrl: 'views/FormContact.tpl.html',
        //        resolve: {
        //            items: function () {
        //                //passing contact information to controller ModalInstanceController
        //                return contactSelected;
        //            }
        //        }
        //    }).result.then(function (contact) {
        //            var promise = ContactService.saveContact(contact); //promise that something will be executed
        //
        //            promise.then(
        //                function (data) {
        //                    _self.hasAlertVisible = true;
        //                    _self.actionMode = data.action;
        //                    _self.findAll();
        //                    $timeout(function () {
        //                        _self.hasAlertVisible = false;
        //                    }, 2000);
        //                },
        //                function (reason) {
        //                    _self.hasAlertVisible = false;
        //                    alert('Failed to ' + reason.action + ': ' + reason);
        //                }
        //            );
        //        });
        };

        _self.findAll = function () {
            var promise = ContactService.findAll(); //promise that something will be executed
            promise.then(
                function (contacts) {
                    _self.contacts = contacts;
                },
                function (reason) {
                    alert('Failed: ' + reason);
                });
        };

        _self.deleteContact = function ($event, contact) {
            $event.stopPropagation(); //stop event bubbling
            $modal.open({
                templateUrl: 'views/ConfirmDialog.tpl.html',
                controller: 'ConfirmDialogController',
                resolve: {
                    items: function () {
                        return contact;
                    }
                }
            }).result.then(function (selectedItem) {
                    var promise = ContactService.deleteContact(selectedItem);
                    promise.then(
                        function () {
                            _self.actionMode = 'deleted';
                            _self.hasAlertVisible = true;
                            _self.findAll();
                            $timeout(function () {
                                _self.hasAlertVisible = false;
                            }, 2000);
                        },
                        function (reason) {
                            alert('Failed to delete: ' + reason);
                        }
                    );

                });
        };

        _self.findAll();
    }

    DashboardController.$inject = ['$modal', '$timeout', 'ContactCreatorDialog', 'ContactService'];

    angular.module('contactListApp')
        .controller('DashboardController', DashboardController);

})();