const btnMenu = document.querySelector('.btn-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-list a');

function toggleMenu() {
    btnMenu.classList.toggle('active');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        btnMenu.classList.remove('active');
        nav.classList.remove('active');
    });
});