'use strict';

var _ = require('lodash');

TacoCategoriesController.$inject = ['TacoCategoriesService'];
function TacoCategoriesController(TacoCategoriesService) {
	var vm = this;

	vm.categories = [];
	vm.isLoading = false;
	vm.previousCategories = [];
	vm.parentCategory = undefined;
	vm.selectedCategory = undefined;

	vm.changeCategory = changeCategory;
	vm.navigateBack = navigateBack;

	activate();

	function activate() {
		if(vm.startingCategoryId > 0) {
			TacoCategoriesService.getCategoryByIdentifier(vm.startingCategoryId)
				.then(function(category) {
					vm.selectedCategory = category;
					_getCategories(category.id);
				});
		} else {
			_getCategories();
		}
	}

	function changeCategory(category) {
		vm.selectedCategory = category;

		if(category && category.children > 0) {
			_getCategories(category.id);
		} else if (!category) {
			_getCategories();
		}

		vm.onCategoryChange({category: category});
	}

	function navigateBack() {
		vm.selectedCategory = _.find(vm.previousCategories, {id: vm.selectedCategory.parent_category_id}); // jshint ignore:line
		vm.changeCategory(vm.selectedCategory);
	}

	function _getCategoryByIdentifier(identifier) {
		TacoCategoriesService.getCategoryByIdentifier(identifier)
			.then(function(category) {
				_getCategories(category.id);
			});
	}

	function _getCategories(categoryId) {
		vm.isLoading = true;
		TacoCategoriesService.getCategories(vm.game.id, categoryId)
			.then(function(categories) {
				vm.categories = categories;
				vm.previousCategories = _.union(vm.previousCategories, categories);
			})
			.finally(function() {
				vm.isLoading = false;
			});
	}
}

module.exports = TacoCategoriesController;
