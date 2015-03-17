(function() {
	'use strict';

	function ThumbnailInformation() {
		return {
			controller: 'Thumbnail',
			controllerAs: 'vmThumbnail',
			scope: {
				contact: '=thumbnailInformation'
			},
			templateUrl: 'views/ThumbnailInformation.tpl.html'
		};
	}

	angular.module('contactListApp')
		.directive('thumbnailInformation', ThumbnailInformation);
})();