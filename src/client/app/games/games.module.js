'use strict';

var dependencies = [
	'ngResource',
	require('./clarifications/clarifications.module.js').name
];

module.exports = angular.module('app.games', dependencies)
	.config(require('./games.routes.js'))
	.controller('GamesController', require('./games.controller.js'))
	.factory('TacoGamesService', require('./games.factory.js'));
