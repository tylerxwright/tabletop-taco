'use strict';

appRoutes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function appRoutes($stateProvider, $locationProvider, $urlRouterProvider) {
 	// Might change this to a 404
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		template: require('./home/templates/home.html')
	}).state('about', {
		url: '/about',
		template: require('./about/templates/about.html')
	});
}

module.exports = appRoutes;
