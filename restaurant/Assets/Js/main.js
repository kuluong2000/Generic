$(document).ready(function(){

    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,

      });
    $('.break-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,

      });
          
});
const bars = document.querySelector('.sub-menu');
const menu = document.querySelector('.header-menu');
bars.addEventListener('click', ()=>{
    menu.classList.toggle('isactive');
    bars.classList.toggle('isactive');
    
});