let btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
if (event.type === 'touchstart') event.preventDefault();
let nav = document.getElementById('navegation');
let body = document.getElementById('body');
nav.classList.toggle('active');
body.classList.toggle('active');
const active = nav.classList.contains('active');
event.currentTarget.setAttribute('aria-expanded', 'true')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);