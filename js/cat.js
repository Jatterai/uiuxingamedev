if (!localStorage.catCount) localStorage.setItem('catCount', 0);

document.addEventListener('click', e => {
	let newCount = +localStorage.catCount + 1;
	console.log(newCount);

	localStorage.catCount = newCount;
	console.log(localStorage.catCount);

})


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

}