'use strict';

TacoGamesFactory.$inject = ['$resource', '$http'];
function TacoGamesFactory($resource, $http) {
	var TacoGamesService = function() {
		this.getGameBySafeName = getGameBySafeName;
		this.getGameCategories = getGameCategories;
		this.getNewestGames = getNewestGames;
		this.getPopularGames = getPopularGames;
	};

	return new TacoGamesService();

	function getGameBySafeName(safeName) {
		var gamesResource = $resource('/api/v1/games/'+safeName);
		var promise = gamesResource.get();
		return promise.$promise.then(function(result) {
			return result;
		});
	}

	function getGameCategories(gameId) {
		return $http.get('/api/v1/games/'+gameId+'/categories')
			.then(function(response) {
				return response.data;
			});
	}

	function getNewestGames(limit) {
		var gamesResource = $resource('/api/v1/games/newest');
		var promise = gamesResource.get();
		return promise.$promise.then(function(result) {
			return result.data;
		});
	}

	function getPopularGames(limit) {
		var gamesResource = $resource('/api/v1/games/popular');
		var promise = gamesResource.get();
		return promise.$promise.then(function(result) {
			return result.data;
		});
	}
}

module.exports = TacoGamesFactory;
