'use strict';

LayoutController.$inject = ['$resource'];
function LayoutController($resource) {
	var vm = this;

	vm.title = 'Something';
	vm.currentYear = new Date().getFullYear();
	vm.breadcrumb = 'Breadcrumb directive here';

	activate();

	function activate() {
	}
}

module.exports = LayoutController;
