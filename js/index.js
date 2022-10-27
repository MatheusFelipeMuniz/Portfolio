let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let mountains_front = document.getElementById('mountains_front');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.0 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    header.style.top = value * 0.5 + 'px';
})

let btn_sobre_mim = document.querySelector('.expand-btn');
let texto_sobre_mim = document.querySelector('.sobre-mim');
let arrow = document.querySelector('#arrow');

btn_sobre_mim.addEventListener('click', function() {
    if(texto_sobre_mim.style.display === 'block') {
        texto_sobre_mim.style.display = 'none';
        arrow.style.transform = 'rotate(360deg)';
    }
    else {
        texto_sobre_mim.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    }
});

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