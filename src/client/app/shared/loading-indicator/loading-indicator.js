'use strict';

loadingIndicatorDirective.$inject = ['tacoLoadingIndicatorConfig'];
function loadingIndicatorDirective(tacoLoadingIndicatorConfig) {

  return {
    restrict: 'A',
    replace: true,
    scope: {
      isLoading: '=loading'
    },
    template: tacoLoadingIndicatorConfig.template,
    link: function (scope, element) {

      scope.$watch('isLoading', function () {
        if (scope.isLoading && scope.loadingInterval) {
          return;
        }
        if (!scope.isLoading) {
          element.removeClass(tacoLoadingIndicatorConfig.loadingClass);
          clearInterval(scope.loadingInterval);
          scope.loadingInterval = undefined;
          return;
        }

        element.addClass(tacoLoadingIndicatorConfig.loadingClass);

        tacoLoadingIndicatorConfig.animate(element, tacoLoadingIndicatorConfig);
        scope.loadingInterval = setInterval(function() {
          tacoLoadingIndicatorConfig.animate(element, tacoLoadingIndicatorConfig);
        }, tacoLoadingIndicatorConfig.intervalDuration);
      }, true);
    }

  };
}

module.exports = loadingIndicatorDirective;
