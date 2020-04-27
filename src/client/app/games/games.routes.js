'use strict';

gamesRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function gamesRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
	$stateProvider.state('game', {
		url: '/games/:gameName',
		template: require('./templates/game.html'),
		controller: 'GamesController',
		controllerAs: 'vm',
		resolve: {
			game: function($stateParams, TacoGamesService) {
				return TacoGamesService.getGameBySafeName($stateParams.gameName);
			}
		}
	});
}

module.exports = gamesRoutes;
