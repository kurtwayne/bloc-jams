var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(){
    var revealPoint = function() {
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };
    $.each($('.point'), revealPoint);
};

$(window).load(function() {
    // Automatically animate points on a taller screen when scrolling
    if ($(window).height() > 950) {
        animatePoints();
    }
    
    var scrollDistance = $('.sellingPoints').offset().top - $(window).height() + 200;
    
    $(window).scroll(function(event) {
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }
    });
});

