//========== SLIDER ===============//

const slider = document.getElementById('slider')
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

leftButton.addEventListener('click', (e) => {
	e.preventDefault();

	const image = slider.style.backgroundImage;
	const newImage = image.replace(/\d(?=\.png)/, $1 => $1 > 1 ? String(+$1 - 1) : 6);

	slider.style.backgroundImage = newImage;
})

rightButton.addEventListener('click', (e) => {
	e.preventDefault();

	const image = slider.style.backgroundImage;
	const newImage = image.replace(/\d(?=\.png)/, $1 => $1 < 6 ? String(+$1 + 1) : 1);

	slider.style.backgroundImage = newImage;
})