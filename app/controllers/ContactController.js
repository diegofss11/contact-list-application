'use strict';
moduleApp.controller('ContactController', function ($scope, $modal, ContactService) {
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
            var isOperationSuccessful = false,
                action = "";

            if(contact._id == undefined){ //new contact
                isOperationSuccessful = ContactService.saveContact(contact);
                $scope.isSaved = true;
                $scope.actionMode = "saved";
            }
            else{
                isOperationSuccessful = ContactService.updateContact(contact); 
                $scope.isSaved = true;
                $scope.actionMode = "updated";
            }
        });
    }  

    $scope.findAll = function(){
        ContactService.findAll(function(err, data){
            $scope.contacts = data;
        });     
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