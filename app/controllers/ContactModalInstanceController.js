'use strict';
moduleApp.controller('ContactModalInstanceController', function ($scope, $modalInstance, items) {
    //set initials values
    if(items == undefined){ 
    	$scope.mode = 'add'; 
    	$scope.isReadOnly = false;  	
    	$scope.modalTitle = "Add Contact";
    	$scope.buttonText = 'Save';
    	$scope.contact = {
    		id: 0,
    		name: '',
    		address: '',
    		phone: ''
    	};
    }
    else{
    	$scope.contact = {
	        _id: items._id,
            name: items.name,
	        phone: items.phone,
	        address: items.address
    	};
    	$scope.mode = 'update';
    	$scope.isReadOnly = true;   	
    	$scope.modalTitle = "Contact Details";
    	$scope.buttonText = 'Update';
    } 

    $scope.isEditable = function (isReadOnly) {
        $scope.isReadOnly = !isReadOnly;       
    }; 

    $scope.cancelAction = function(isReadOnly){
    	if($scope.mode == 'add'){
    		//if is add Contact - cancel will exit
    		$modalInstance.dismiss('cancel');
    	}
    	else{
    		//go back to readyOnly mode
    		$scope.contact = {
		        _id: items._id,
		        name: items.name,
		        phone: items.phone,
		        address: items.address
    		};
    		$scope.isEditable(isReadOnly);	
    	}
    }  

    $scope.saveContact = function(contact, isFormValid) { 
    	$scope.submitted = true;       
        if(isFormValid){
        	$scope.contact = contact;
        	$modalInstance.close(contact);	
        }        
    };

    $scope.close = function () {
        $modalInstance.dismiss('cancel');
    };    
});
