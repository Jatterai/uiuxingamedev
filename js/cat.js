


//============= cat ==============//
const audio = document.createElement('audio');
audio.src = '../assets/audio/Maxwell-the-Cat-Theme-djlunatique.com.mp3';
audio.playsInline = true;

const video = document.createElement('video');
video.src = '../assets/video/cat.webm';
video.playsInline = true;

video.classList.add('maxwell');
video.loop = true;
document.querySelector('.wrapper').prepend(video)

const moreBtns = document.querySelectorAll('._cat');

moreBtns.forEach(btn => btn.addEventListener('click', maxwellPlay))




function maxwellPlay(e) {
	if (localStorage.alreadyKittened?.includes(e.currentTarget.id)) return;

	if (!localStorage.catCount) localStorage.setItem('catCount', 0);
	if (localStorage.catCount >= 10) return;
	const elementId = e.currentTarget.id;
	if (!audio.readyState && !video.readyState) {
		audio.src = './assets/audio/Maxwell-the-Cat-Theme-djlunatique.com.mp3';
		video.src = './assets/video/cat.webm';
	}
	audio.play();
	video.play();
	video.classList.add('play')
	document.body.classList.add('locked')


	setTimeout(() => {
		document.body.classList.remove('locked');
		audio.currentTime = 0;
		audio.pause();
		video.currentTime = 0;
		video.pause();
		video.classList.remove('play')
	}, 7300);

	setTimeout(() => {
		const newCount = Number(localStorage.catCount) + 1
		localStorage.catCount = newCount;

		if (!localStorage.alreadyKittened) {
			localStorage.setItem('alreadyKittened', '');
			myAlert()
		}
		console.log(e.currentTarget);

		localStorage.alreadyKittened += ` ${elementId}`;
	}, 7500);


}

function myAlert() {
	const alert = document.createElement('div');
	alert.classList.add('cat__rules');
	alert.innerHTML = 'Поздравляю!<br>Ты нашел кота!<br>Постарайся найти все 10!';
	const closeBtn = document.createElement('div');
	closeBtn.innerHTML = 'X';
	closeBtn.classList.add('cat__close')
	alert.prepend(closeBtn);

	document.querySelector('.wrapper').prepend(alert);

	closeBtn.addEventListener('click', e => {
		alert.remove();
		closeBtn.remove();
	});
}