$(document).ready(function() {
    $('.block__title').click(function(event) {
        if ($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
})

function backToTop() {
    let btn = $('.back-to-top');

    $(window).on('scroll', () => {
        if($(this).scrollTop() >=50) {
            btn.fadeIn()
        } else {
            btn.fadeOut();
        }
    });

    btn.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 500)

    })
}
backToTop();