$(function(){
    $('.slider').slick({
        prevArrow: '<div class="feedbacks__arrow feedbacks__arrow_l"><i class="fa fa-angle-left"></i></div>',
        nextArrow: '<div class="feedbacks__arrow feedbacks__arrow_r"><i class="fa fa-angle-right"></i></div>',
        dots: true,
        dotsClass: 'round',
        infinite: false,
    });
});