export function highlightActiveLink() {
	const currentPath = window.location.pathname;
	const menuLinks = document.querySelectorAll('.menu__link');

	menuLinks.forEach(link => {
		if (link.getAttribute('href') === currentPath) {
			link.classList.add('active');
		}
	});
}