const headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click',function(){
 document.documentElement.classList.toggle('open-menu')
})
const headerSearch = document.querySelector('.header__search');
const headerInput = document.querySelector('.header__input')
headerSearch.addEventListener('click', function(){
    document.documentElement.classList.toggle('open-input')
})
const actionsButton = document.querySelector('.actions__button')
actionsButton.addEventListener('click', function(){
    document.documentElement.classList.toggle('open-actions')
})