
//==== counter ====//
const cat_counter = document.createElement('div');
cat_counter.className = 'catCounter';
cat_counter.innerHTML = `
<button class="catCounter__btn btn">></button>
<div class="catCounter__content">
	<div class="catCounter__number" id="catNumber">
	${localStorage.catCount || 1}
	</div>
</div>`
document.querySelector('.wrapper').prepend(cat_counter);
cat_counter.addEventListener('click', e => e.currentTarget.classList.toggle('hide'))
if (localStorage.catCount) cat_counter.className += ' itson hide';


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
	if (localStorage.catCount >= 10) {
		cat_counter.remove();
		return
	};
	const elementId = e.currentTarget.id;
	if (!audio.readyState && !video.readyState) {
		audio.src = './assets/audio/Maxwell-the-Cat-Theme-djlunatique.com.mp3';
		video.src = './assets/video/cat.webm';
	}
	audio.play();
	video.play();
	if (!cat_counter.className.includes('hide') && localStorage.catCount > 0) cat_counter.classList.add('hide');
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
		document.getElementById('catNumber').innerHTML = String(newCount)
		if (!localStorage.alreadyKittened) {
			localStorage.setItem('alreadyKittened', '');
			myAlert('Поздравляю!<br>Ты нашел кота!<br>Постарайся найти все 10!');
			cat_counter.classList.add('itson')
		}
		localStorage.alreadyKittened += ` ${elementId}`;
	}, 7500);


}

function myAlert(message) {
	const alert = document.createElement('div');
	alert.classList.add('cat__rules');
	alert.innerHTML = message;
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