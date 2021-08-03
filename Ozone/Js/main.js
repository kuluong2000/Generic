
function menuToggle(){
    const bars = document.querySelector('.sub-menu');
const menu = document.querySelector('.header-menu-list');
const navlinks = document.querySelectorAll('.header-menu-list li');
bars.addEventListener('click', ()=>{
    menu.classList.toggle('isactive');
    bars.classList.toggle('isactive');
    window.addEventListener('click', function(e){
        if (!menu.contains(e.target) && !e.target.matches('.sub-menu')){
            menu.classList.remove('isactive');
            bars.classList.remove('isactive');
        }
    });
    navlinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `navLink 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
});

}