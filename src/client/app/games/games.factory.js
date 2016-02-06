'use strict';

TacoGamesFactory.$inject = ['$resource'];
function TacoGamesFactory($resource) {
	var TacoGamesService = function() {
		this.getNewestGames = getNewestGames;
		this.getPopularGames = getPopularGames;
	};

	return new TacoGamesService();

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
