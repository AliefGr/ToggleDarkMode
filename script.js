
const body = document.querySelector('body');
const btnToggle = document.querySelector('.btn_toggle');
const iconMoon = document.querySelector('.icon_moon')
const iconSun = document.querySelector('.icon_sun')

const theme = localStorage.getItem('theme');

theme && body.classList.add(theme);

btnToggle.addEventListener('click', ()=> {

    body.classList.toggle('dark_mode')

    if(body.classList.contains('dark_mode')){
        iconMoon.style.display = "block";
        iconSun.style.display = "none";

        localStorage.setItem('theme', 'dark_mode')
    }else{
        iconMoon.style.display = "none";
        iconSun.style.display = "block";

        localStorage.removeItem('theme');
    }
})