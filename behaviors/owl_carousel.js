(function ($) {
  'use strict';

  BBlog.behaviors.owl_carousel = {
    $el: null,
    items: 3,

    init: function ($el) {
      this.$el = $el;
      if (this.$el.data('owl-carousel-items')) {
        this.items = this.$el.data('owl-carousel-items');
      }

      this.$el.owlCarousel({
        items: this.items,
        loop: true,
        nav: true,
        margin: 30,
        navText: ['<span class="icon icon-back-arrow"></span>', '<span class="icon icon-next-arrow"></span>']
      });
    }
  };

}(jQuery));