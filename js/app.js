document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.burger')
    const menu = document.querySelector('.aside')
    const asideClose  = document.querySelector('.aside__close ')


    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('aside--active')
    })

    asideClose.addEventListener('click', () => {
        menu.classList.toggle('aside--active')
    })

    const itemMenu = document.querySelectorAll('.menu__btn')
    
    itemMenu.forEach((elem) => {
        elem.addEventListener('click', () => {
            elem.nextElementSibling.classList.toggle('h-auto')
            elem.lastChild.classList.toggle('menu__icon--active')
        })
    })
});

