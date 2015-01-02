(function ($) {
  'use strict';

  TXT.behaviors.equal_height_divs = {
    $targets: [],

    currentTallest: 0,
    currentRowStart: 0,
    rowDivs: [],
    topPosition: 0,

    init: function ($el) {
      this.$el = $el;
      this.setValues();
      this.bindEvents();
      this.run();
    },

    setValues: function () {
      var targetsClass = this.$el.data('equal-height-div-class');
      this.$targets = this.$el.find("." + targetsClass);
    },

    bindEvents: function () {
      $(window).on('resize', $.proxy(this.run, this));
    },

    reset: function () {
      this.rowDivs.length = 0;
      this.topPosition = 0;
      this.currentRowStart = 0;
      this.currentTallest = 0;
    },

    run: function () {
      var that = this;

      that.$targets.each(function () {
        var $this = $(this),
          currentDiv;

        $this.height('auto');
        that.topPosition = $this.position().top;

        if (that.currentRowStart !== that.topPostion) {
          for (currentDiv = 0; currentDiv < that.rowDivs.length; currentDiv++) {
            that.rowDivs[currentDiv].height(that.currentTallest);
          }
          that.rowDivs.length = 0; // empty the array
          that.currentRowStart = that.topPostion;
          that.currentTallest = $this.height();
          that.rowDivs.push($this);
        } else {
          that.rowDivs.push($this);
          that.currentTallest = (that.currentTallest < $this.height()) ? ($this.height()) : (that.currentTallest);
        }

        for (currentDiv = 0; currentDiv < that.rowDivs.length; currentDiv++) {
          that.rowDivs[currentDiv].height(that.currentTallest);
        }
      });

      this.reset();
    }
  };

}(jQuery));