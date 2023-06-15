const search = document.querySelector('.header__search');
const wrapper = document.querySelector('.wrapper');

search.addEventListener('submit', (e) => {
	e.preventDefault();

	const val = search.elements.input.value;
	const kek = document.createElement('h2');

	if (!val) return;
	kek.classList.add('secret');
	kek.innerText = val;
	wrapper.prepend(kek);

	setTimeout(() => kek.remove(), 1500)


})






