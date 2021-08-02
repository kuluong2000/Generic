const bars = document.querySelector('.sub-menu');
const menu = document.querySelector('.header-menu-list');
bars.addEventListener('click', ()=>{
    menu.classList.toggle('isactive');
    bars.classList.toggle('isactive');
});