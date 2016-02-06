'use strict';

clarificationsRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function clarificationsRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
	$stateProvider.state('game.clarifications', {
		url: '/clarifications',
		template: require('./templates/clarifications.html')
	});
}

module.exports = clarificationsRoutes;
