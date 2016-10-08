$(document).ready(function(){
    // Sections
    $('.animate-up').mouseenter(function(){
       $(this).css({
        '-webkit-transform': 'translateY(-10px)',
        '-moz-transform': 'translateY(-10px)',
        '-ms-transform': 'translateY(-10px)',
        '-o-transform': 'translateY(-10px)',
        'transform': 'translateY(-10px)',
       })
    });
    $('.animate-up').mouseleave(function(){
        $(this).css({
            '-webkit-transform': 'translateY(0)',
            '-moz-transform': 'translateY(0)',
            '-ms-transform': 'translateY(0)',
            '-o-transform': 'translateY(0)',
            'transform': 'translateY(0)',
        })
    });

});