'use strict';

var dependencies = [
	'ngResource'
];

module.exports = angular.module('app.layout', dependencies)
	.controller('LayoutController', require('./layout.controller.js'));
