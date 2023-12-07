const headerBurger = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
headerBurger.addEventListener('click',function(){
    menu.classList.toggle("open-menu")
})