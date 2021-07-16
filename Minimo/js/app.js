const sub_menu= document.querySelector('.sub-menu');
const header_menu= document.querySelector('.header-menu');

sub_menu.addEventListener('click', ()=>{
    header_menu.classList.toggle('isactivity')
})