export function initAnimations() {
	const backgroundBlock = document.querySelector('.background-block');
	const firstScreen = document.querySelector('.first-screen');
	const header = document.querySelector('.header');
	const body = document.querySelector('.body');
	const animateItem = document.querySelector('.first-screen__button');

	if (body) {
		body.classList.add('lock');
	}

	if (header && window.location.pathname === '/portier/dist/') {
		header.classList.add('header_hidden');
	}

	if (backgroundBlock) {
		backgroundBlock.addEventListener('animationend', (e) => {
			if (e.animationName === 'slide-top') {
				backgroundBlock.dispatchEvent(new CustomEvent('expandBackgroundEnd', { bubbles: true }));
			}
		});

		if (animateItem) {
			animateItem.addEventListener('animationend', (e) => {
				if (e.animationName === 'slideIn') {
					animateItem.dispatchEvent(new CustomEvent('freeBodyEvent', { bubbles: true }));
				}
			});
		}

		document.addEventListener('expandBackgroundEnd', () => {
			header.classList.add('header_open');
			firstScreen.classList.remove('first-screen_hiden');
			firstScreen.classList.add('first-screen_animate');
		});

		document.addEventListener('freeBodyEvent', () => {
			body.classList.remove('lock');
		});
	}
}
