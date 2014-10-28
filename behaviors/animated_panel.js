(function ($) {
  'use strict';

  TXT.behaviors.animated_panel = {
    $el: null,

    init: function ($el) {
      this.$el = $el;
      this.start();
    },

    start: function () {
      var that = this;

      this.$el.waypoint(function (direction) {
        if (direction === 'down') {
          that.$el.addClass('on-screen');
          if (!that.$el.data('has_been_seen')) {
            that.$el.addClass('first-time-on-screen');
            that.$el.data('has_been_seen', true);
          }
        } else {
          that.$el.removeClass('on-screen');
          that.$el.removeClass('first-time-on-screen');
          that.$el.addClass('has-been-on-screen');
        }
      }, { offset: '90%' });

      this.$el.waypoint(function (direction) {
        if (direction === 'down') {
          that.$el.removeClass('on-screen');
          that.$el.removeClass('first-time-on-screen');
          that.$el.addClass('has-been-on-screen');
        } else {
          that.$el.addClass('on-screen');
          if (!that.$el.data('has_been_seen')) {
            that.$el.addClass('first-time-on-screen');
            that.$el.data('has_been_seen', true);
          }
        }
      }, { offset: function () { return -that.$el.outerHeight() } });
    }
  };

}(jQuery));