(function(root) {
  'use strict';

  var rcm = root.availity.rcm;

  rcm.ui.constant('avAsyncButtonConfig', {
    loadingClass: 'btn-async',
    template: require('./async-button.tpl.html')
  });

  rcm.ui.directive('avAsyncButton', asyncButtonDirective);

  asyncButtonDirective.$inject = ['avAsyncButtonConfig'];
  function asyncButtonDirective(avAsyncButtonConfig) {
    return {
      restrict: 'A',
      transclude: true,
      scope: {
        disabled: '=ngDisabled',
        isLoading: '=loading'
      },
      template: avAsyncButtonConfig.template,
      link: function (scope, element) {

        scope.$watch('isLoading', function () {
          if (scope.isLoading) {
            element.addClass(avAsyncButtonConfig.loadingClass);
            if (!scope.isDisabled) {
              element.attr('disabled', 'disabled');
            }
          } else {
            element.removeClass(avAsyncButtonConfig.loadingClass);
            if (!scope.disabled) {
              element.removeAttr('disabled');
            }
          }
        });
      }
    };
  }

})(window);
