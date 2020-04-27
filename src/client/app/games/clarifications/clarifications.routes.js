'use strict';

clarificationsRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function clarificationsRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
	$stateProvider.state('game.clarifications', {
		url: '/clarifications',
		params: {categoryId: 0},
		template: require('./templates/clarifications.html'),
		controller: 'ClarificationsController',
		controllerAs: 'vm'
	}).state('game.clarifications.clarification', {
		url: '/:clarificationId',
		template: require('./templates/clarification.html'),
		controller: 'ClarificationController',
		controllerAs: 'vm',
		resolve: {
			clarification: function($stateParams, TacoClarificationsService) {
				return TacoClarificationsService.getClarificationDetailsById($stateParams.clarificationId);
			}
		}
	});
}

module.exports = clarificationsRoutes;
