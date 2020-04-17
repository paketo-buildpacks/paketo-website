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
                    wp.classList.add('joined');
                }
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
        .on('click', '.faq-header', function(){
            var el = $(this);
            if(el.hasClass('shown')){
                el.removeClass('shown');
                el.next().slideUp({duration: 500, easing: 'easeInOutQuart'});
            } else {
                el.addClass('shown');
                el.next().slideDown({duration: 500, easing: 'easeInOutQuart'});
            }
        });
    });

}());