'use strict';

TacoGameGallery.$inject = [];
function TacoGameGallery() {
	return {
		restrict: 'E',
		template: require('./templates/game-gallery.html'),
		controllerAs: 'vm',
		controller: require('./game-gallery.controller.js'),
		bindToController: true,
		scope: {
			games: '=?',
			loading: '=',
			title: '@'
		},
		link: function(scope, element, attrs, vm) {
			var x = 1;
		}
	};
}

module.exports = TacoGameGallery;
