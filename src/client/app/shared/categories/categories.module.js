'use strict';

require('./categories.scss');

var dependencies = [
	'ngResource'
];

module.exports = angular.module('app.shared.categories', dependencies)
	.controller('CategoriesController', require('./categories.controller.js'))
	.factory('TacoCategoriesService', require('./categories.factory.js'))
	.directive('tacoCategories', require('./categories.directive.js'));
