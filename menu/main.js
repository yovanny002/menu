window.addEventListener('scroll', () => {
    let header = document.querySelector('header');
        header.classList.toggle('cambio', window.scrollY > 0)
});

function toggleMenu(){
    let menuToggle = document.querySelector(".toggle");
    let menu = document.querySelector('.menu')
    menuToggle.classList.toggle('activate');
    menu.classList.toggle('activate')
} 
