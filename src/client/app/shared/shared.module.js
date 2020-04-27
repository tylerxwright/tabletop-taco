'use strict';

var dependencies = [
	require('./categories/categories.module.js').name,
	require('./game-gallery/game-gallery.module.js').name,
	require('./loading-indicator/loading-indicator.module.js').name,
	require('./modal/modal.module.js').name,
];

module.exports = angular.module('app.shared', dependencies);
