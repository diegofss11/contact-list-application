'use strict';
angular.module('contactListApp')
    .controller('ContactController', function ($scope, $modal, $timeout, ContactService) {
        $scope.hasAlertVisible = false;
        $scope.contactAction = function(contactSelected){
            $modal.open({
                templateUrl: '/app/views/FormContactView.html',
                controller: 'ContactModalInstanceController',
                resolve: {
                    items: function () {
                        //passing contact information to controller ModalInstanceController
                        return contactSelected;
                    }
                }
            }).result.then(function (contact){
                var promise = ContactService.saveContact(contact); //promise that something will be executed
                    
                promise.then(
                    function(data){
                        $scope.hasAlertVisible = true;
                        $scope.actionMode = data.action;
                        $scope.findAll();
                        $timeout(function(){
                            $scope.hasAlertVisible = false;
                        }, 2000);
                    },
                    function(reason){
                        $scope.hasAlertVisible = false;
                        alert('Failed to '+ reason.action +': ' + reason);
                    }
                );             
            });
        };  

        $scope.findAll = function(){
            var promise = ContactService.findAll(); //promise that something will be executed
            promise.then(
                function(contacts){
                    $scope.contacts = contacts;
                },
                function(reason){
                    alert('Failed: ' + reason);
                });            
        };

        $scope.deleteContact = function($event, contact){
            $event.stopPropagation(); //stop event bubbling
            $modal.open({
                templateUrl: '/app/dialogs/ConfirmDialog.html',
                controller: 'ConfirmDialogController',
                resolve: {
                    items: function () {
                        return contact;
                    }
                }
            }).result.then(function (selectedItem) {
               var promise = ContactService.deleteContact(selectedItem);
               promise.then(
                function(){
                    $scope.actionMode = 'deleted';
                    $scope.hasAlertVisible = true;
                    $scope.findAll();
                    $timeout(function(){
                        $scope.hasAlertVisible = false;
                    }, 2000);
                },
                function(reason){
                    alert('Failed to delete: ' + reason);
                }            
            );    
               
            });     
        };

        $scope.findAll();
    });