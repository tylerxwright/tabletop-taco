'use strict';

var _ = require('lodash');

ClarificationController.$inject = ['game', 'clarification'];
function ClarificationController(game, clarification) {
	var vm = this;

	vm.clarification = clarification;

	activate();

	function activate() {
		console.log(clarification);
		console.log(game);
	}
}

module.exports = ClarificationController;
