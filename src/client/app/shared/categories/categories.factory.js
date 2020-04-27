'use strict';

TacoCategoriesFactory.$inject = ['$resource', '$http'];
function TacoCategoriesFactory($resource, $http) {
	var TacoCategoriesService = function() {
		this.getCategoryByIdentifier = getCategoryByIdentifier;
		this.getCategories = getCategories;
	};

	return new TacoCategoriesService();

	function getCategoryByIdentifier(identifier) {
		var gamesResource = $resource('/api/v1/rule-categories/'+identifier);
		var promise = gamesResource.get();
		return promise.$promise.then(function(result) {
			return result;
		});
	}

	function getCategories(gameId, categoryId) {
		var resource = $http.get('/api/v1/games/'+gameId+'/clarifications/categories?parentId='+categoryId);
		return resource.then(function(response) {
				return response.data;
			});
	}
}

module.exports = TacoCategoriesFactory;
