'use strict';

require('./clarifications.scss');
require('./clarification.scss');

var dependencies = [
	'ngResource'
];

module.exports = angular.module('app.clarifications', dependencies)
	.config(require('./clarifications.routes.js'))
	.controller('ClarificationController', require('./clarification.controller.js'))
	.controller('ClarificationsController', require('./clarifications.controller.js'))
	.factory('TacoClarificationsService', require('./clarifications.factory.js'));
