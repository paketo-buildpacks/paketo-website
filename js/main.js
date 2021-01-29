;(function () {
    'use strict';

    // simple script to open external links in new tab
    var links = document.getElementsByTagName("a");
    for (var i = 0, linksLength = links.length; i < linksLength; i++) {
        if (links[i].hostname != window.location.hostname) {
            links[i].target = '_blank';
        }
    }

    var wp = document.getElementById('wp');
    if(wp){ // don't bother if we're not on the homepage.
        var scrollHandler = function (event) {
            var getRect = wp.getBoundingClientRect();
            if(getRect.top < 200){
                if(!wp.classList.contains('joined')){
                    wp.classList.add('joined'); }
            } else {
                if(wp.classList.contains('joined')){
                    wp.classList.remove('joined');
                }
            }
        };
        document.addEventListener('scroll', scrollHandler);
    }

    $(function(){
        $(document)
        .on('click', '.nav-opener', function(){
            var el = $(this);
            if(el.hasClass('opened')){
                el.removeClass('opened').next('nav').removeClass('showing');
            } else {
                el.addClass('opened').next('nav').addClass('showing');
            }
        });

        $(document)
        .on('click', '.docs .code-output .btn', function(){
            var output = $(this).parents('.code-output')
            if (output.hasClass('visible')) {
              output.removeClass('visible');
            } else {
              output.addClass('visible');
            }
        });

        var heroClipboard = new ClipboardJS('.hero .commands .command .clipboard', {
            text: function(el) {
                var builders = el.closest('.builders')

                for (let builder of ['full', 'base', 'tiny']) {
                  if (builders.classList.contains(builder)) {
                    return builders.querySelector('code.' + builder).innerText;
                  }
                }

                return null;
            }
        });

        var docsClipboard = new ClipboardJS('.docs pre.copyable img', {
            text: function(el) {
                return el.previousElementSibling.innerText;
            }
        });
        docsClipboard.on('success', function(el) {
          var parent = el.trigger.parentElement;
          parent.classList.add('copied');
        });
    });
}());
