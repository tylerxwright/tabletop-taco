'use strict';

var _ = require('lodash');

ClarificationsController.$inject = ['$state', '$stateParams', 'TacoClarificationsService', 'game', 'TacoModal'];
function ClarificationsController($state, $stateParams, TacoClarificationsService, game, TacoModal) {
	var vm = this;

	vm.clarifications = [];
	vm.game = game;
	vm.isLoading = false;
	vm.startingCategoryId = 0;

	vm.navigateToClarification = navigateToClarification;
	vm.onCategoryChange = onCategoryChange;
	vm.openNewClarification = openNewClarification;

	activate();

	function activate() {
		vm.startingCategoryId = $stateParams.categoryId;
		if(vm.startingCategoryId !== 0) {
			_getClarifications(vm.startingCategoryId);
		}
	}

	function navigateToClarification(clarification) {
		$state.go('game.clarifications.clarification', {clarificationId: clarification.id});
	}

	function onCategoryChange(category) {
		if(category) {
			_getClarifications(category.id);
		}
	}

	function openNewClarification() {
		TacoModal.open({
			template: require('./templates/new-clarification-modal.html')
		});
	}

	function _getClarifications(categoryId) {
		vm.isLoading = true;
		TacoClarificationsService.getClarifications(vm.game.id, categoryId)
			.then(function(clarifications) {
				vm.clarifications = clarifications.data;
			})
			.finally(function() {
				vm.isLoading = false;
			});
	}
}

module.exports = ClarificationsController;
