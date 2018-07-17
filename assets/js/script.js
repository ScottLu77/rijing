$('.btn_menu').click(function() {
    $('nav').fadeIn(200);
});
//TODO this make whole nav disappear right after click nav_close or btn_nav
$('.nav_close').click(function() {
    $('nav').fadeOut(200);
});
$('.btn_nav').click(function() {
    $('nav').fadeOut(200);
});
$('.register_close').click(function() {
    $('.register_box').fadeOut(250);
});
