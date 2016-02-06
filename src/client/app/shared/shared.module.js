'use strict';

var dependencies = [
];

module.exports = angular.module('app.shared', dependencies)
	.directive('tacoGameGallery', require('./game-gallery/game-gallery.directive.js'));
