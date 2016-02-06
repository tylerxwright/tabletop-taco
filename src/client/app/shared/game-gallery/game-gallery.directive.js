'use strict';

require('./game-gallery.scss');

TacoGameGallery.$inject = [];
function TacoGameGallery() {
	return {
		restrict: 'E',
		template: require('./game-gallery.html'),
		controllerAs: 'vm',
		controller: require('./game-gallery.controller.js'),
		bindToController: true,
		scope: {
			games: '=?',
			title: '@'
		},
		link: function(scope, element, attrs, vm) {
			var x = 1;
		}
	};
}

module.exports = TacoGameGallery;
