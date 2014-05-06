'use strict';
moduleApp.controller('ContactController', function ($scope, $modal, ContactService) {
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

            if(contact.id == 0){ //new contact
                isOperationSuccessful = ContactService.saveContact(contact);
                action = "saved";
            }
            else{
                isOperationSuccessful = ContactService.updateContact(contact); 
                action = "updated";
            }
            if(isOperationSuccessful){
        	   $modal.open({
        			templateUrl: '/app/dialogs/NotifyDialog.html',
        			controller: 'NotifyModalController',                    
                    resolve: {
                        items: function () {                           
                            return action;
                        }
                    }
        		});
        	}
        });
	}  

	$scope.findAll = function(){
		$scope.contacts = ContactService.findAll();		
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
});