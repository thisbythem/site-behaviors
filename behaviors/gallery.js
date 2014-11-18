(function ($) {
  'use strict';

  TXT.behaviors.gallery = {
    $el: null,

    init: function ($el) {
      this.$el = $el;
      this.start();
    },

    start: function () {
      this.$el.magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    }
  };

}(jQuery));
