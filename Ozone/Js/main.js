

$( document ).ready(function() {
    // function slider
    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1500
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
// window.addEventListener('click', function(e){
//     if (!menu.contains(e.target) && !e.target.matches('.sub-menu')){
//         menu.classList.remove('isactive');
//         bars.classList.remove('isactive');
//     }
// });


