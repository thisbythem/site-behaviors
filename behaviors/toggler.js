(function ($) {
  'use strict';

  TXT.behaviors.toggler = {
    $el: null,
    $target: null,
    $triggers: null,

    targetID: null,
    elType: null,

    init: function ($el) {
      this.$el = $el;
      this.targetID = this.$el.data('toggler-target');
      this.$targets = $('[data-toggler-id~="' + this.targetID + '"]');
      this.$triggers = $('[data-behavior~="toggler"][data-toggler-target~="' + this.targetID + '"]');

      this.setElType();
      this.bindEvents();
    },

    bindEvents: function () {
      this.$el.on('click', $.proxy(this.onTogglerClick, this));
    },

    setElType: function () {
      if (this.$el.is('input')) {
        this.elType = 'input';
      }
    },

    onTogglerClick: function (e) {
      if (this.shouldPreventDefault()) {
        e.preventDefault();
      }

      this.$triggers.each(function () {
        $(this).toggleClass('open');
      });
      this.$targets.each(function () {
        $(this).toggleClass('open');
      });
    },

    shouldPreventDefault: function () {
      return this.elType !== 'input';
    }
  };

}(jQuery));
