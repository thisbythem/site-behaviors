(function ($) {
  'use strict';

  TXT.behaviors.infinite_scroll = {
    $el: null,
    $window: null,
    $loader: null,
    href: null,
    page: 2,
    hasItemsAvailable: true,
    loading: false,

    init: function ($el) {
      this.$el = $el;
      this.$window = $(window);
      this.href = this.$el.data('infinite-scroll-url');

      this.buildLoader();
      this.loadMore();
      this.bindEvents();
    },

    bindEvents: function () {
      this.$window.on('scroll', $.proxy(this.loadMore, this));
    },

    loadMore: function (direction) {
      var that = this,
        href = this.href + '?page=' + this.page;

      if (this.isBottomOfDocument() && this.hasItemsAvailable && !this.loading) {
        this.loading = true;
        this.showLoader();

        $.get(href, function (data) {
          $(data).appendTo(that.$el);
          that.page++;
          that.loading = false;
          that.hideLoader();
          if (data.trim() === '') {
            that.hasItemsAvailable = false;
          }
        });
      }
    },

    isBottomOfDocument: function () {
      return this.$window.scrollTop() >= $(document).height() - (this.$window.height() * 1.4);
    },

    buildLoader: function () {
      this.$loader = $('<div></div>').attr('class', 'loading');
      this.$el.append(this.$loader);
    },

    showLoader: function () {
      this.$loader.show();
    },

    hideLoader: function () {
      this.$loader.hide();
    }
  };

}(jQuery));