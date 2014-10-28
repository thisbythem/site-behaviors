(function ($) {
  'use strict';

  $(document).ready(function () {
    TXT.installBehaviors();
  });

  $(document).ajaxComplete(function () {
    TXT.installBehaviors();
  });
}(jQuery));
