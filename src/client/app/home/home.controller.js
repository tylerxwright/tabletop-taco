'use strict';

HomeController.$inject = ['$resource', 'TacoGamesService'];
function HomeController($resource, TacoGamesService) {
	var vm = this;

	vm.isLoadingNewestGames = false;
	vm.isLoadingPopularGames = false;
	vm.newestGames = [];
	vm.popularGames = [];

	activate();

	function activate() {
		_getNewestGames();
		_getPopularGames();
	}

	function _getNewestGames() {
		vm.isLoadingNewestGames = true;
		TacoGamesService.getNewestGames(10)
			.then(function(games) {
				vm.newestGames = games;
				vm.isLoadingNewestGames = false;
			});
	}

	function _getPopularGames() {
		vm.isLoadingPopularGames = true;
		TacoGamesService.getPopularGames(10)
			.then(function(games) {
				vm.popularGames = games;
				vm.isLoadingPopularGames = false;
			});
	}
}

module.exports = HomeController;
