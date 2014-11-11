(function ($) {
  'use strict';

  TXT.behaviors.autoscroll = {
    $el: null,
    $window: null,
    $target: null,

    namedAnchor: null,
    anchorTop: null,
    duration: 700,

    init: function ($el) {
      this.$el = $el;
      this.$window = $(window);

      this.setValues();
      this.bindEvents();
    },

    setValues: function () {
      this.namedAnchor = this.$el.attr('href');

      // No named anchors, look for ids
      this.$target = $(this.namedAnchor);

      if (this.$target.length === 0) {
        // No ID's, look for named anchors
        this.$target = $('[name="' + this.namedAnchor.substr(1) + '"]');
      }

      this.anchorTop = this.$target.offset().top;

      if (this.$el.data('autoscroll-duration')) {
        this.duration = this.$el.data('autoscroll-duration');
      }
    },

    bindEvents: function () {
      this.$el.on('click', $.proxy(this.linkWasClicked, this));
    },

    linkWasClicked: function (e) {
      e.preventDefault();

      $('html, body').animate({
        scrollTop: this.anchorTop
      }, 700, 'easeOutQuart');
    }
  };

}(jQuery));
