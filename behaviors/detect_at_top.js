(function ($) {
  'use strict';

  BBlog.behaviors.detect_at_top = {
    $el: null,
    $window: null,

    offset: 0,

    className: 'not-at-top',

    init: function ($el) {
      this.$el = $el;

      if (this.$el.data('detect-at-top-offset')) {
        this.offset = this.$el.data('detect-at-top-offset');
      }
      this.$window = $(window);
      this.bindEvents();
      this.start();
    },

    bindEvents: function () {
      this.$window.on('scroll', $.proxy(this.windowWasScrolled, this));
    },

    start: function () {
      if (this.$window.scrollTop() > (0 + this.offset)) {
        this.$el.addClass(this.className);
      };
    },

    windowWasScrolled: function () {
      var scrollTop = this.$window.scrollTop();
      if (scrollTop <= 0 + this.offset) {
        this.$el.removeClass(this.className);
      } else if (this.$window.scrollTop() > (0 + this.offset) && !this.$el.hasClass(this.className)) {
        this.$el.addClass(this.className);
      }
    }
  };

}(jQuery));