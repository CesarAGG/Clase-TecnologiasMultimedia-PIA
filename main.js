$(function () {
    // make the class hover-galeria fade in when hovered over
    $('.hover-galeria').hover(function () {
        $(this).fadeTo('fast', 1);
    }, function () {
        $(this).fadeTo('fast', 0);
    }
    );
})
