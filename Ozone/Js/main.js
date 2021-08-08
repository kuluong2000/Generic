

$( document ).ready(function() {
    // function slider
    $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
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
    var offset = $(this).parents().children(".banner").next().offset().top;
  
    $(window).scrollTop(offset);
});

//scroll to top
//Khi người dùng cuộn chuột thì gọi hàm scrollFunction
window.onscroll = function() {
    scrollFunction()
};
// khai báo hàm scrollFunction
function scrollFunction() {
    // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        //nếu lớn hơn 20px thì hiện button
        document.querySelector('.mybtn-scrolltop').style.display="block";
    } else {
         //nếu nhỏ hơn 20px thì ẩn button
        document.querySelector('.mybtn-scrolltop').style.display = "none";
    }
}

$('.mybtn-scrolltop').click(function(){
    var scroll = $('.header').offset().top;
    $(window).scrollTop(scroll);
})