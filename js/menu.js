const burger = document.getElementById('burger_menu');
const nav = document.querySelector('.header__nav');

let closed = true;
burger.addEventListener('click', (e) => {
	if (closed) {
		e.currentTarget.classList.add('opened');
		document.body.classList.add('locked');
		nav.classList.add('opened');
		setTimeout(() => {
			closed = !closed;
		}, 300);
		return;
	}
	e.currentTarget.classList.remove('opened');
	document.body.classList.remove('locked');
	nav.classList.remove('opened');
	setTimeout(() => {
		closed = !closed;
	}, 300);
})

nav.addEventListener('click', (e) => {
	e.currentTarget.classList.remove('opened');
	document.body.classList.remove('locked');
	nav.classList.remove('opened');
	setTimeout(() => {
		closed = !closed;
	}, 300);
})


//--------- up button ------------/

const upbtn = document.querySelector('.upbtn');


document.addEventListener('scroll', (e) => {
	if (scrollY > 200) {
		upbtn.classList.add('shown');
	}
	else {
		upbtn.classList.remove('shown')
	}
})

upbtn.addEventListener('click', () => {
	scrollTo(0, 0)
})



//====== animation =======//

const animItems = document.querySelectorAll('._anim');

if (!!animItems.length) {
	window.addEventListener('scroll', animOnScroll)

	function animOnScroll() {
		animItems.forEach(item => {
			itemHeigth = item.offsetHeight;
			itemOffset = offset(item).top;
			itemStartIndex = 4;


			let itemPoint = itemHeigth > window.innerHeight ?
				window.innerHeight - window.innerHeight / itemStartIndex :
				window.innerHeight - itemHeigth / itemStartIndex;
			if ((scrollY > itemOffset - itemPoint) && scrollY < (itemOffset + itemHeigth)) {
				item.classList.add('on')
			} else {
				if (item.classList.contains('_anim_no-hide')) return;
				item.classList.remove('on')
			}
		})
	}
}

function offset(el) {
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.scrollX || document.documentElement.scrollLeft,
		scrollTop = window.scrollY || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

setTimeout(() => {
	animOnScroll();
}, 100);


//============= cat ==============//
const audio = document.createElement('audio');
audio.src = '../assets/audio/Maxwell-the-Cat-Theme-djlunatique.com.mp3';

const video = document.createElement('video');
video.src = '../assets/video/cat.webm';


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