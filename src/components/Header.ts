export function Header(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
   <div class="header__container">
            <div class="header__logo-block logo-block">
              <img
                src="/logo.svg"
                alt="logo"
                class="logo-block__logo"
                width="44"
                height="44"
              />
              <div class="logo-block__title">Portier</div>
            </div>
            <div class="header__menu menu">
              <button type="button" class="menu__icon icon-menu">
                <span></span>
              </button>
              <nav class="menu__body">
                <ul class="menu__list">
                  <li class="menu__item">
                    <a href="" class="menu__link active">Portfolio</a>
                  </li>
                  <li class="menu__item">
                    <a href="" class="menu__link">About Me</a>
                  </li>
                  <li class="menu__item">
                    <a href="" class="menu__link">Blog</a>
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
  `;
  return header;
}
