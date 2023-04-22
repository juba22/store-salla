$(window).scroll(function() {
    
    var top = $('#header').offset().top;
    var headerTop = (top - $(window).scrollTop());

    if (headerTop <= top) {
        $('#header').addClass('active');
    }
    if (headerTop >= top) {
        $('#header').removeClass('active');
    }

});

$(window).scroll(function() {
    
    var top = $('#features').scrollTop();
    var featuresTop = $('#features').offset().top;

    if (featuresTop >= top) {
        $('#features').addClass('show');
    }
    if (featuresTop <= top) {
        $('#features').removeClass('show');
    }
});

$('.res.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
$('.dis.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
$('.region.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$('.visited.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

