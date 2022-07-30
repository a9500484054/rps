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


});

