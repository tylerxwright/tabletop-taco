'use strict';

var dependencies = [
	/* 3rd party */
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngAnimate',
	'ui.router',
	'ui.bootstrap',
	'ngMaterial',
	/* modules */
	require('./shared/shared.module.js').name,
	require('./layout/layout.module.js').name,
	require('./home/home.module.js').name,
	require('./games/games.module.js').name,
];

module.exports = angular.module('app', dependencies)
	.config(require('./app.routes.js'));
