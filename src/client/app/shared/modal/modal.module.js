'use strict';

require('./modal.scss');

var dependencies = [
	'ngResource'
];

module.exports = angular.module('app.shared.modal', dependencies)
	.factory('TacoModal', require('./modal.factory.js'));
