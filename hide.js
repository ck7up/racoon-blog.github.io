$(window).scroll(function () {

    if ($(this).scrollTop() > 500) {
        $('.logo').fadeOut(800);
    }
    else {
        $('.logo').fadeIn(800);
    }
});
