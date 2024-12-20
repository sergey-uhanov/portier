export function initMenu() {
	const burgerBtn = document.querySelector('.icon-menu');
	const menuList = document.querySelector('.menu__list');

	if (burgerBtn && menuList) {
		burgerBtn.addEventListener('click', () => {
			menuList.classList.toggle('open');
			burgerBtn.classList.toggle('menu-open');
		});
	}
}