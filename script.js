(function() {
  var $loading = null;
  var init = function(text) {
    var htmls = [
      '<div class="loading-animate">',
      '<b class="animate-0"></b>',
      '<b class="animate-1"></b>',
      '<b class="animate-2"></b>',
      '<b class="animate-3"></b>',
      '<b class="animate-4"></b>',
      '<span class="animate-tips">', (text || '拼命加载中...'),
      '</span>',
      '</div>'
    ];
    return htmls.join('');
  };

  var pubMethod = {
    init: function($target, text) {
      $loading = $(init(text));
      $target.append($loading);
    },
    show: function() {
      if ($loading !== null) {
        $loading.show();
        $loading.find('.animate-tips').addClass('animate-tips-start');
      }
    },
    hide: function() {
      if ($loading !== null) {
        $loading.hide();
        $loading.find('.animate-tips').removeClass('animate-tips-start');
      }
    }
  };

  pubMethod.init($(document.body));
  pubMethod.show();
})();