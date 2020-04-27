'use strict';

require('./game-gallery.scss');

var dependencies = [
	'ngResource'
];

module.exports = angular.module('app.shared.game-gallery', dependencies)
	.controller('TacoGameGalleryController', require('./game-gallery.controller.js'))
	.directive('tacoGameGallery', require('./game-gallery.directive.js'));
