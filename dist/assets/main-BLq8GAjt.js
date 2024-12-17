(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();function C(){const e=document.createElement("header");return e.className="header",e.innerHTML=`
   <div class="header__container">
            <a href="/" class="header__logo-block logo-block logo-block--about">
              <img
                src="/logo.svg"
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
                    <a href="/portfolio" class="menu__link ">Portfolio</a>
                  </li>
                  <li class="menu__item">
                    <a href="/about" class="menu__link">About Me</a>
                  </li>
                  <li class="menu__item">
                    <a href="/blog" class="menu__link">Blog</a>
                  </li>
                  <li class="menu__item">
                    <a href="" class="menu__link menu__link--button"
                      >Get Template</a
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div> 
  `,e}function m(){const e=document.createElement("footer");return e.className="footer",e.innerHTML=`
   <div class="footer__container">
          <div class="footer__logo logo-block logo-block--footer">
            <img
              src="/logo.svg"
              alt="logo"
              class="logo-block__logo"
              width="44"
              height="44"
            />
            <div class="logo-block__title">Portier</div>
          </div>
          <div class="footer__menu-block footer-menu">
            <ul class="footer-menu__list">
              <li class="footer-menu__item">Portfolio</li>
              <li class="footer-menu__item">About Me</li>
              <li class="footer-menu__item">Blog</li>
              <li class="footer-menu__item">Contact</li>
              <li class="footer-menu__item">Handbook</li>
              <li class="footer-menu__item">Design System</li>
              <li class="footer-menu__item">Timeline</li>
            </ul>
          </div>
          <div class="footer__bottom-row">
            <div class="footer__copyright">
              Copyright 2021 © Portier. All right reserved
            </div>
            <div class="footer__social-block">
              <a href="#" class="footer__social-link"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.23348 4.69608C7.23348 2.96863 8.63347 1.56836 10.3601 1.56836C11.3737 1.56836 12.1831 2.04783 12.7255 2.74364C13.308 2.62446 13.8558 2.40892 14.3514 2.11487C14.156 2.72577 13.7425 3.23939 13.2034 3.56442C13.2039 3.56547 13.2043 3.56653 13.2048 3.56758C13.7335 3.5034 14.2365 3.36281 14.7049 3.15525L14.7038 3.15694C14.3668 3.66162 13.9432 4.10715 13.4562 4.47013C13.4824 4.64651 13.4957 4.82406 13.4957 5.00058C13.4957 8.68689 10.6874 12.9744 5.52134 12.9744C3.93918 12.9744 2.46556 12.5108 1.22517 11.715C0.992754 11.5659 0.92523 11.2566 1.07435 11.0242C1.08752 11.0036 1.10195 10.9844 1.11746 10.9664C1.20594 10.82 1.3745 10.7307 1.55552 10.752C2.47078 10.8599 3.3858 10.7483 4.19231 10.396C3.39238 10.0432 2.77141 9.35954 2.50216 8.51953C2.45371 8.36839 2.48847 8.2029 2.59363 8.08401C2.59728 8.07989 2.60099 8.07585 2.60476 8.07189C1.96403 7.50798 1.55985 6.68187 1.55985 5.76122V5.72738C1.55985 5.56793 1.64423 5.42038 1.78167 5.33953C1.82683 5.31296 1.87549 5.2949 1.92544 5.28537C1.70561 4.86133 1.58128 4.37963 1.58128 3.86937C1.58128 3.40144 1.58396 2.81171 1.91344 2.2806C1.9873 2.16154 2.1077 2.08894 2.23652 2.07174C2.426 2.01216 2.64099 2.06948 2.77418 2.23281C3.86548 3.57105 5.44078 4.49562 7.23378 4.7394L7.23348 4.69608ZM5.52134 11.9744C4.73399 11.9744 3.97793 11.8433 3.2726 11.6021C4.13024 11.4536 4.95319 11.1157 5.6623 10.56C5.81223 10.4425 5.87194 10.2433 5.81138 10.0627C5.75082 9.88213 5.58312 9.75922 5.39267 9.75586C4.6898 9.74345 4.06724 9.39695 3.67805 8.86824C3.8684 8.85285 4.0544 8.82018 4.23457 8.77146C4.43615 8.71695 4.57375 8.53093 4.56686 8.32222C4.55997 8.11351 4.41041 7.93697 4.20567 7.89586C3.42706 7.73956 2.79895 7.16743 2.56181 6.42153C2.76267 6.47004 2.97114 6.49889 3.18494 6.50589C3.38575 6.51246 3.56658 6.38512 3.62807 6.19384C3.68955 6.00256 3.61678 5.7937 3.44975 5.68203C2.86535 5.29134 2.48128 4.62443 2.48128 3.86937C2.48128 3.70192 2.48364 3.55247 2.49367 3.41698C3.85127 4.79892 5.70885 5.6891 7.776 5.79317C7.93237 5.80105 8.0834 5.73522 8.18407 5.61532C8.28475 5.49541 8.32344 5.33527 8.28863 5.18263C8.25267 5.02496 8.23348 4.86263 8.23348 4.69608C8.23348 3.52064 9.18603 2.56836 10.3601 2.56836C11.5944 2.56836 12.4957 3.71187 12.4957 5.00058C12.4957 8.25688 10.0203 11.9744 5.52134 11.9744Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="footer__social-link footer__social-link--active"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.49948 0.850098C3.82779 0.850098 0.850098 3.82739 0.850098 7.50032C0.850098 10.438 2.75535 12.9307 5.39787 13.8105C5.73059 13.8713 5.85183 13.6659 5.85183 13.4896C5.85183 13.3316 5.84612 12.9136 5.84285 12.3588C3.99313 12.7605 3.60285 11.4672 3.60285 11.4672C3.30034 10.6989 2.86435 10.4943 2.86435 10.4943C2.26056 10.082 2.91007 10.0902 2.91007 10.0902C3.57754 10.1371 3.92862 10.7756 3.92862 10.7756C4.52179 11.7917 5.48524 11.4982 5.86408 11.328C5.9245 10.8985 6.09637 10.6054 6.2862 10.4392C4.8096 10.271 3.25707 9.70072 3.25707 7.1525C3.25707 6.42624 3.5163 5.83307 3.94169 5.36809C3.87311 5.19989 3.6449 4.52384 4.00701 3.60816C4.00701 3.60816 4.56506 3.42935 5.8355 4.2895C6.3658 4.14213 6.93489 4.06865 7.5003 4.06579C8.0653 4.06865 8.63398 4.14213 9.1651 4.2895C10.4347 3.42935 10.9919 3.60816 10.9919 3.60816C11.3549 4.52384 11.1267 5.19989 11.0585 5.36809C11.4847 5.83307 11.7419 6.42624 11.7419 7.1525C11.7419 9.70725 10.1869 10.2694 8.70583 10.4339C8.94424 10.6393 9.15693 11.0451 9.15693 11.6656C9.15693 12.5543 9.14877 13.2716 9.14877 13.4896C9.14877 13.6676 9.26879 13.8746 9.606 13.8096C12.2465 12.9283 14.1501 10.4376 14.1501 7.50032C14.1501 3.82739 11.1724 0.850098 7.49948 0.850098Z"
                    fill="#222233"
                  />
                </svg>
              </a>
              <a href="#" class="footer__social-link"
                ><svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.3825 1.29546C3.46241 1.11411 3.64188 0.99707 3.84005 0.99707H11.5C11.7761 0.99707 12 1.22093 12 1.49707V5.49979C12 5.77593 11.7761 5.99979 11.5 5.99979H8.63521L11.5288 9.16226C11.6626 9.30849 11.6974 9.51994 11.6175 9.70133C11.5376 9.88272 11.3582 9.99979 11.16 9.99979H8V13.4998C8 13.702 7.87818 13.8843 7.69134 13.9617C7.5045 14.0391 7.28945 13.9964 7.14645 13.8534L3.14645 9.85334C3.05268 9.75958 3 9.6324 3 9.49979V5.49979C3 5.22365 3.22386 4.99979 3.5 4.99979H6.36531L3.47105 1.83447C3.33732 1.68823 3.30259 1.4768 3.3825 1.29546ZM7.72032 4.99979L4.97474 1.99707H11V4.99979H7.72032ZM7.27978 5.99979H4V8.99979H7.5H10.0247L7.27978 5.99979ZM4.70711 9.99979L7 12.2927V9.99979H4.70711Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a href="#" class="footer__social-link"
                ><svg
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.71145 0.796909C6.57742 0.734364 6.42258 0.734364 6.28856 0.796909L0.288557 3.59691C0.112517 3.67906 0 3.85574 0 4.05V10.95C0 11.1443 0.112517 11.3209 0.288557 11.4031L6.28856 14.2031C6.42258 14.2656 6.57742 14.2656 6.71145 14.2031L12.7114 11.4031C12.8875 11.3209 13 11.1443 13 10.95V4.05C13 3.85574 12.8875 3.67906 12.7114 3.59691L6.71145 0.796909ZM6.5 3.15675L4.9804 2.51092L6.5 1.80177L8.0196 2.51092L6.5 3.15675ZM6.69557 4.16019L9.23821 3.07959L11.2719 4.02866L6.5 6.05672L1.72809 4.02866L3.76182 3.07959L6.30443 4.16019C6.4294 4.21331 6.5706 4.21331 6.69557 4.16019ZM7 6.93079L12 4.80579V7.92967L10.0821 8.81191C9.72731 8.9751 9.50001 9.32989 9.50001 9.7204V11.7982L7 12.9649V6.93079ZM10.5 11.3316L12 10.6316V9.0304L10.5 9.7204V11.3316ZM6 6.93079V12.9649L3.50232 11.7993V9.72037C3.50232 9.32986 3.275 8.97507 2.92023 8.81188L0.999997 7.92857V4.80579L6 6.93079ZM0.999997 10.6316L2.50232 11.3326V9.72037L0.999997 9.0293V10.6316Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
  `,e}const s=document.querySelector(".wrapper");s&&(s.prepend(C()),s.appendChild(m()));const d=document.querySelector(".icon-menu"),f=document.querySelector(".menu__list");d.addEventListener("click",()=>{f.classList.toggle("open"),d.classList.toggle("menu-open")});document.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname;document.querySelectorAll(".menu__link").forEach(i=>{i.getAttribute("href")===e&&i.classList.add("active")})});const r=document.querySelector(".background-block"),c=document.querySelector(".header");document.addEventListener("DOMContentLoaded",()=>{c&&window.location.pathname=="/"&&c.classList.add("header--hidden")});const u=document.querySelector(".first-screen");r&&(r.addEventListener("animationend",e=>{if(e.animationName==="slide-top"){const l=new CustomEvent("expandBackgroundEnd",{bubbles:!0});r.dispatchEvent(l)}}),document.addEventListener("expandBackgroundEnd",()=>{c.classList.add("header--open"),u.classList.remove("first-screen--hiden"),u.classList.add("first-screen--animate")}));document.getElementById("soundButton").addEventListener("click",()=>{const e=document.getElementById("clickSound");e&&e.play().catch(l=>console.error("Ошибка воспроизведения:",l))});
