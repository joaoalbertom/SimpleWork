$(document).ready(function(){
    /* ------------ posicionamento ------------ */
    $('.row').css({ 'margin-left' : ($('.row').parent().width() - $('.row').width())/2, 'margin-right' : ($('.row').parent().width() - $('.row').width())/2 });
    $('.center-left').css({'margin-left' : (0 - $('.center-left').width())/2 }); /* centraliza o elemento horizontalmente */
    $('.center-top').css({'margin-top' : (0 - ($('.center-top').width()/2)) }); /* centraliza o elemento verticalmente */
    if($('.inline-menu').parent().attr('class') == 'top-bar-nav') {$('.inline-menu').height() = $('.top-bar-nav').height();}
});
