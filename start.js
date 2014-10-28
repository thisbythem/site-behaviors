(function ($) {
  'use strict';

  $(document).ready(function () {
    BBlog.installBehaviors();
  });

  $(document).ajaxComplete(function () {
    BBlog.installBehaviors();
  });
}(jQuery));
