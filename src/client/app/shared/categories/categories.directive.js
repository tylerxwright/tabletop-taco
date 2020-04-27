'use strict';

TacoCategories.$inject = [];
function TacoCategories() {
	return {
		restrict: 'E',
		template: require('./templates/categories.html'),
		controllerAs: 'vm',
		controller: require('./categories.controller.js'),
		bindToController: true,
		scope: {
			game: '=?',
			title: '@',
			onCategoryChange: '&onCategoryChange',
			startingCategoryId: '='
		},
		link: function(scope, element, attrs, vm) {
		}
	};
}

module.exports = TacoCategories;
