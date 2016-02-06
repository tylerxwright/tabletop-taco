'use strict';

HomeController.$inject = ['$resource', 'TacoGamesService'];
function HomeController($resource, TacoGamesService) {
	var vm = this;

	vm.newestGames = [];
	vm.popularGames = [];

	activate();

	function activate() {
		_getNewestGames();
		_getPopularGames();
	}

	function _getNewestGames() {
		TacoGamesService.getNewestGames(10)
			.then(function(games) {
				vm.newestGames = games;
			});
	}

	function _getPopularGames() {
		TacoGamesService.getPopularGames(10)
			.then(function(games) {
				vm.popularGames = games;
			});
	}
}

module.exports = HomeController;
