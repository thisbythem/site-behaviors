(function ($) {
  'use strict';

  TXT.behaviors.sticky = {
    $el: null,
    $window: null,
    offset: 0,
    innerScrolling: false,
    triggerMinWidth: 0,

    init: function ($el) {
      this.$el = $el;
      this.$window = $(window);

      if (this.$el.data('sticky-offset')) {
        this.offset = this.$el.data('sticky-offset');
      }

      if (this.$el.data('sticky-inner-scrolling')) {
        this.innerScrolling = this.$el.data('inner_scrolling');
      }

      if (this.$el.data('sticky-trigger-min-width')) {
        this.triggerMinWidth = this.$el.data('sticky-trigger-min-width');
      }

      this.bindEvents();
      this.run();
    },

    bindEvents: function () {
      this.$window.on('resize', $.proxy(this.run, this));
    },

    run: function () {
      if (this.$window.outerWidth() >= this.triggerMinWidth) {
        this.$el.stick_in_parent({
          offset_top: this.offset,
          inner_scrolling: this.innerScrolling
        });
      } else {
        this.$el.trigger('sticky_kit:detach');
      }
    }
  };
}(jQuery));