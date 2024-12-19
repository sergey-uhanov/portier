import './scss/style.scss';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer'

const wrapper = document.querySelector('.wrapper');

if (wrapper) {
  wrapper.prepend(Header());
  wrapper.appendChild(Footer());
}


const burgerBtn = document.querySelector('.icon-menu');
const menuList = document.querySelector('.menu__list');
burgerBtn.addEventListener('click', () => {
  menuList.classList.toggle('open');
  burgerBtn.classList.toggle('menu-open');
})

// присвоение в menu header открытой страницы
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const menuLinks = document.querySelectorAll(".menu__link");

  menuLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });
});


// анимация
const backgroundBlock = document.querySelector('.background-block');
const header = document.querySelector('.header');


if (header && window.location.pathname == '/portier/dist/') {
  console.log('/portier/dist/');
  console.log(window.location.pathname);


  header.classList.add('header_hidden');
}



const firstScreen = document.querySelector('.first-screen');

if (backgroundBlock) {
  backgroundBlock.addEventListener('animationend', (e) => {
    if (e.animationName === 'slide-top') {
      const expandBackgroundEnd = new CustomEvent("expandBackgroundEnd", {
        bubbles: true,
      });
      // Диспетчеризуем событие
      backgroundBlock.dispatchEvent(expandBackgroundEnd);
    }

  })
  document.addEventListener("expandBackgroundEnd", () => {
    header.classList.add('header_open');
    firstScreen.classList.remove('first-screen_hiden')
    firstScreen.classList.add('first-screen_animate');
  })
}

document.getElementById('soundButton').addEventListener('click', () => {
  const audio = document.getElementById('clickSound');

  if (audio) {
    audio.play().catch(error => console.error('Ошибка воспроизведения:', error));
  }
});