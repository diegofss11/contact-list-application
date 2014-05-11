'use strict';
moduleApp.controller('ContactController', function ($scope, $modal, $timeout, ContactService) {
    $scope.isSaved = false;
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
                    $scope.isSaved = true;
                    $scope.actionMode = data.action;

                    $timeout(function(){
                        $scope.isSaved = false;
                    }, 2000);
                },
                function(reason){
                    $scope.isSaved = false;
                    alert("Failed to "+ reason.action +": " + reason);
                }
            );             
        });
    }  

    $scope.findAll = function(){
        var promise = ContactService.findAll(); //promise that something will be executed
        promise.then(
            function(contacts){
                $scope.contacts = contacts;
            },
            function(reason){
                alert('Failed: ' + reason);
            },
            function(percentComplete){
                $scope.progress = percentComplete;
            }
        );            
    }

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
           ContactService.deleteContact(selectedItem);
        });     
    }

    $scope.findAll();
});