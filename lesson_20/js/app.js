const rightBlock = document.querySelector('.right-block__item')
const title = document.querySelector('.right-block__title')
title.addEventListener('click',function(){
    rightBlock.classList.toggle('open-item')
})