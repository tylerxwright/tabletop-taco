'use strict';

require('./games.scss');

var dependencies = [
	'ngResource',
	'ui.router',
	require('./clarifications/clarifications.module.js').name
];

module.exports = angular.module('app.games', dependencies)
	.config(require('./games.routes.js'))
	.controller('GamesController', require('./games.controller.js'))
	.controller('DetailsController', require('./details.controller.js'))
	.factory('TacoGamesService', require('./games.factory.js'));
