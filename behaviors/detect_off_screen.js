(function ($) {
  'use strict';

  BBlog.behaviors.detect_off_screen = {
    $el: null,
    $window: null,

    windowHeight: null,
    elHeight: null,
    elTop: null,

    init: function ($el) {
      this.$el = $el;
      this.$window = $(window);

      this.windowHeight = this.$window.height();
      this.elTop = this.$el.offset().top;
      this.elHeight = this.$el.outerHeight();

      this.run();
    },

    run: function () {
      if (this.elTop + this.elHeight > this.windowHeight) {
        this.$el.addClass('off-screen');
      }
    }
  };

}(jQuery));