(function ($) {
  'use strict';

  TXT.behaviors.modal = {
    $el: null,

    type: 'image',

    init: function ($el) {
      this.$el = $el;

      if (this.$el.data('modal-type')) {
        this.type = this.$el.data('modal-type');
      }

      this.start();
    },

    start: function () {
      this.$el.magnificPopup({
        type: this.type
      });
    }
  };

}(jQuery));
