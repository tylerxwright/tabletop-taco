'use strict';

GamesController.$inject = ['$resource', '$stateParams', 'TacoGamesService', 'game'];
function GamesController($resource, $stateParams, TacoGamesService, game) {
	var vm = this;

	vm.game = game;

	activate();

	function activate() {
		_getCategories();
	}

	function _getCategories() {
		TacoGamesService.getGameCategories(vm.game.id)
			.then(function(categories) {
				vm.game.categories = categories;
			});
	}
}

module.exports = GamesController;
