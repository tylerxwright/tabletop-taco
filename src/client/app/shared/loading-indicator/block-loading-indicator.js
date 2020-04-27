'use strict';

blockLoadingIndicatorDirective.$inject = ['$compile', 'tacoBlockLoadingIndicatorConfig'];
function blockLoadingIndicatorDirective($compile, tacoBlockLoadingIndicatorConfig) {
  return {
    restrict: 'A',
    scope: {
      isLoading: '=loading',
      message: '@',
      messagePosition: '@'
    },
    compile: function() {
      return {
        pre: preLink,
        post: postLink
      };
    }
  };

  function preLink(scope, element) {
    var template = $compile(tacoBlockLoadingIndicatorConfig.template)(scope);

    element.append(template);
    element.addClass('block-loading-indicator');
  }

  function postLink(scope, element) {
    scope.message = scope.message || tacoBlockLoadingIndicatorConfig.defaultMessage;
    scope.messagePosition = scope.messagePosition || tacoBlockLoadingIndicatorConfig.messagePosition;

    scope.$watch('isLoading', function () {
      if (scope.isLoading) {
        element.addClass(tacoBlockLoadingIndicatorConfig.loadingClass);
      } else {
        element.removeClass(tacoBlockLoadingIndicatorConfig.loadingClass);
      }
    });
  }
}

module.exports = blockLoadingIndicatorDirective;
