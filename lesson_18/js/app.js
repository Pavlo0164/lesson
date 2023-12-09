const headerBurger = document.querySelector('.header__burger');
const header = document.querySelector('.header');
headerBurger.addEventListener("click", function(){
    header.classList.toggle("active")
});