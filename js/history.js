//========== SLIDER ===============//

const slider = document.getElementById('slider')
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const dots = document.querySelector('.slider__dots');

leftButton.addEventListener('click', toLeft)
rightButton.addEventListener('click', toRight)

let touchStart = 0;
let touchEnd = 0;

function detectSwipe() {
	if (touchStart < touchEnd) toLeft();
	else toRight();
}

slider.addEventListener('touchstart', e => touchStart = e.changedTouches[0].clientX);
slider.addEventListener('touchend', e => {
	touchEnd = e.changedTouches[0].clientX;
	detectSwipe()
});

function toLeft(e) {
	const image = slider.style.backgroundImage;
	let newImgNum = 0;
	const newImage = image.replace(/\d(?=\.png)/, $1 => {
		if ($1 > 1) {
			newImgNum = String(+$1 - 1)
		} else {
			newImgNum = 6
		}
		return newImgNum;
	});
	changeActiveDot(newImgNum)
	slider.style.backgroundImage = newImage;
}

function toRight(e) {

	const image = slider.style.backgroundImage;
	let newImgNum = 0;
	const newImage = image.replace(/\d(?=\.png)/, $1 => {
		if ($1 < 6) {
			newImgNum = String(+$1 + 1)
		} else {
			newImgNum = 1;
		}
		return newImgNum;
	});
	slider.style.backgroundImage = newImage;
	changeActiveDot(newImgNum)
}

function changeActiveDot(imgNum) {
	for (let dot of dots.children) {
		dotNum = dot.className.match(/(?<=dot)\d/);
		dot.classList.remove('active');
		if (+dotNum === +imgNum) dot.classList.add('active')
	}
}