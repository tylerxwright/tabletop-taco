'use strict';

require('./loading-indicator.less');

function defaultAnimation(indicator, tacoLoadingIndicatorConfig) {
	indicator.find(tacoLoadingIndicatorConfig.indicatorClass)
		.velocity('transition.slideRightIn', {stagger: 250})
		.delay(250)
		.velocity({opacity: 0}, 500);
}

var dependencies = [
	'ngResource'
];

module.exports = angular.module('app.shared.block-loading-indicator', dependencies)
	.constant('tacoBlockLoadingIndicatorConfig', {
	  defaultMessage: 'Loading',
	  messagePosition: 'top', // top, center
	  loadingClass: 'on',
	  messageClass: 'loading-message',
	  overlayClass: 'loading-overlay',
	  template: require('./block-loading-indicator.tpl.html')
	})
	.constant('tacoLoadingIndicatorConfig', {
    animate: defaultAnimation,
    indicatorClass: '.loading-bullet',
    intervalDuration: 1500,
    loadingClass: 'loading',
    template: require('./loading-indicator.tpl.html')
  })
	.directive('tacoBlockLoadingIndicator', require('./block-loading-indicator.js'))
	.directive('avLoadingIndicator', require('./loading-indicator.js'));
