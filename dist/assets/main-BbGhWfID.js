import{F as l}from"./Footer-DnkFbwZG.js";function d(){const e=document.createElement("header");return e.className="header",e.innerHTML=`
   <div class="header__container">
            <a href="/" class="header__logo-block logo-block logo-block--about">
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
              <button type="button" class="menu__icon icon-menu">
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
  `,e}const n=document.querySelector(".wrapper");n&&(n.prepend(d()),n.appendChild(l()));const c=document.querySelector(".icon-menu"),r=document.querySelector(".menu__list");c.addEventListener("click",()=>{r.classList.toggle("open"),c.classList.toggle("menu-open")});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname;document.querySelectorAll(".menu__link").forEach(s=>{s.getAttribute("href")===e&&s.classList.add("active")})});const o=document.querySelector(".background-block"),a=document.querySelector(".header");document.addEventListener("DOMContentLoaded",()=>{a&&window.location.pathname=="/"&&a.classList.add("header--hidden")});const i=document.querySelector(".first-screen");o&&(o.addEventListener("animationend",e=>{if(e.animationName==="slide-top"){const t=new CustomEvent("expandBackgroundEnd",{bubbles:!0});o.dispatchEvent(t)}}),document.addEventListener("expandBackgroundEnd",()=>{a.classList.add("header--open"),i.classList.remove("first-screen--hiden"),i.classList.add("first-screen--animate")}));document.getElementById("soundButton").addEventListener("click",()=>{const e=document.getElementById("clickSound");e&&e.play().catch(t=>console.error("Ошибка воспроизведения:",t))});
