'use strict';

require('./home.scss');

module.exports = angular.module('app.home',
[
	'ngResource'
])
	.controller('HomeController', require('./home.controller.js'));
