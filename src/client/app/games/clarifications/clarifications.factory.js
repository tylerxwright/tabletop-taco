'use strict';

TacoClarificationsFactory.$inject = ['$resource', '$http'];
function TacoClarificationsFactory($resource, $http) {
	var TacoClarificationsService = function() {
		this.getClarificationById = getClarificationById;
		this.getClarificationDetailsById = getClarificationDetailsById;
		this.getClarifications = getClarifications;
	};

	return new TacoClarificationsService();

	function getClarificationById(clarificationId) {
		var resource = $http.get('/api/v1/clarifications/'+clarificationId);
		return resource.then(function(response) {
			return response.data;
		});
	}

	function getClarificationDetailsById(clarificationId) {
		var resource = $http.get('/api/v1/clarifications/'+clarificationId+'/details');
		return resource.then(function(response) {
			return response.data;
		});
	}

	function getClarifications(gameId, categoryId) {
		var resource = $http.get('/api/v1/games/'+gameId+'/clarifications/categories/'+categoryId);
		return resource.then(function(response) {
			return response.data;
		});
	}
}

module.exports = TacoClarificationsFactory;
