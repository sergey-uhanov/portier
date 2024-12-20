export function initAudio() {
	const clickSound = document.getElementById('soundButton');

	if (clickSound) {
		clickSound.addEventListener('click', () => {
			console.log('Sound button clicked');
			const audio = document.getElementById('clickSound');
			if (audio) {
				console.log('Playing sound');

				audio.play().catch(error => console.error('Ошибка воспроизведения:', error));
			}
		});
	}
}
