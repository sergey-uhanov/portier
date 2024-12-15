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