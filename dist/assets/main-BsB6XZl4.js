import{F as l}from"./Footer-1UJI2S-y.js";function r(){const e=document.createElement("header");return e.className="header",e.innerHTML=`
   <div class="header__container">
            <a href="/portier/dist/" class="header__logo-block logo-block logo-block--about">
              <img
                src="./logo.svg"
                alt="logo"
                class="logo-block__logo"
                width="44"
                height="44"
              />
              <div class="logo-block__title">Portier</div>
            </a>
            <div class="header__menu menu">
              <button type="button" aria-label="open menu" class="menu__icon icon-menu">
                <span></span>
              </button>
              <nav class="menu__body">
                <ul class="menu__list">
                  <li class="menu__item">
                    <a href="/portier/dist/portfolio" class="menu__link ">Portfolio</a>
                  </li>
                  <li class="menu__item">
                    <a href="/portier/dist/about" class="menu__link">About Me</a>
                  </li>
                  <li class="menu__item">
                    <a href="/portier/dist/blog" class="menu__link">Blog</a>
                  </li>
                  <li class="menu__item">
                    <a href="/portier/dist/text.html" class="menu__link menu__link--button"
                      >Get Template</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div> 
  `,e}const n=document.querySelector(".wrapper");n&&(n.prepend(r()),n.appendChild(l()));const i=document.querySelector(".icon-menu"),d=document.querySelector(".menu__list");i.addEventListener("click",()=>{d.classList.toggle("open"),i.classList.toggle("menu-open")});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname;document.querySelectorAll(".menu__link").forEach(s=>{s.getAttribute("href")===e&&s.classList.add("active")})});const o=document.querySelector(".background-block"),a=document.querySelector(".header");a&&window.location.pathname=="/portier/dist/"&&(console.log("/portier/dist/"),console.log(window.location.pathname),a.classList.add("header--hidden"));const c=document.querySelector(".first-screen");o&&(o.addEventListener("animationend",e=>{if(e.animationName==="slide-top"){const t=new CustomEvent("expandBackgroundEnd",{bubbles:!0});o.dispatchEvent(t)}}),document.addEventListener("expandBackgroundEnd",()=>{a.classList.add("header--open"),c.classList.remove("first-screen--hiden"),c.classList.add("first-screen--animate")}));document.getElementById("soundButton").addEventListener("click",()=>{const e=document.getElementById("clickSound");e&&e.play().catch(t=>console.error("Ошибка воспроизведения:",t))});
