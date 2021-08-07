

$( document ).ready(function() {
    // function slider
    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    //   autoplay: true,
      autoplaySpeed: 2000
    });
});

const bars = document.querySelector('.sub-menu');
const menu = document.querySelector('.header-menu-list');
const navlinks = document.querySelectorAll('.header-menu-list li');
bars.addEventListener('click', ()=>{
    menu.classList.toggle('isactive');
    bars.classList.toggle('isactive');
    navlinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `navLink 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
});
new WOW().init();
$('.banner-angle').click(function(){
    var offset = $('.service').offset().top;
    $(window).scrollTop(offset);
});


$('.mybtn-scrolltop').click(function(){
    var scroll = $('.header').offset().top;
    $(window).scrollTop(scroll);
})