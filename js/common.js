$(document).ready(function () {
    $('.btn-toggle').on('click', function () {
        let topVal = 0;
        if ($(this).hasClass('hb-open')) {
            topVal = -600;
            $(this).removeClass('hb-open');
        } else {
            $(this).addClass('hb-open');
        }

        $('.nav').stop().animate({
            top: topVal
        }, 200);
    });

});