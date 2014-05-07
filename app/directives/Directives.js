'use strict';

moduleApp.directive('navBar', function(){
	return {
		restrict: 'E',
		templateUrl: '/app/views/NavBar.html'
	};
});

moduleApp.directive('notification', function($timeout, $animate){
	return function(scope, element, attrs){
		scope.$watch(attrs.notification, function(val){
			if(val){
				$animate.addClass(element, "fade");
			}
			else{
				$animate.removeClass(element, "fade");
			}
		})
	}

  /*return {
     restrict: 'E',
     template: '<div class="alert alert-success"><strong>You successfully saved a contact</strong></div>',
     link: function(scope, element, attrs){
        $timeout(function(){
            if(scope.isSaved){
            	scope.isSaved = false;
            }                  
        }, 1000);
     }
  }*/
});