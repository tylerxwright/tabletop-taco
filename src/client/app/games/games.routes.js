'use strict';

gamesRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function gamesRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
	$stateProvider.state('game', {
		url: '/games/:gameName',
		template: require('./templates/game.html')
	});
}

module.exports = gamesRoutes;
