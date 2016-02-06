'use strict';

var dependencies = [
	'ngResource'
];

module.exports = angular.module('app.clarifications', dependencies)
	.config(require('./clarifications.routes.js'))
	.controller('ClarificationsController', require('./clarifications.controller.js'));
