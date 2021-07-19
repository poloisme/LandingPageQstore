const btnMenu = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");

btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('menu-toggle-open');
    mainMenu.classList.toggle('show');
})

const header = document.querySelector('.header');
const headerWitdh = header.offsetTop;

window.addEventListener('scroll', () => {
    if(window.pageYOffset > headerWitdh) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
})