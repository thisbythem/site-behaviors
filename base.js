(function ($) {
  'use strict';

  window.BBlog = {
    behaviors: {},

    installBehaviors: function () {
      $('[data-behavior]').once('behavior').each(function () {
        var $this = $(this),
          behaviors = $this.data('behavior').trim().split(' ');

        $.each(behaviors, function (i, behavior) {
          var klass = BBlog.behaviors[behavior];
          if (klass !== undefined) {
            Object.create(klass).init($this);
          }
        });
      });
    }
  };

}(jQuery));

