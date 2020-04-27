'use strict';

TacoModalFactory.$inject = ['$uibModal'];
function TacoModalFactory($uibModal) {
	var TacoModalService = function() {
		this.open = open;
	};

	return new TacoModalService();

	function open(options) {
		$uibModal.open({
			scope: options.scope,
			template: options.template
		});
	}
}

module.exports = TacoModalFactory;
