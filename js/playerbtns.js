const ui_btn = document.getElementById('player1');
const ux_btn = document.getElementById('player2');
const ui = document.getElementById('ui');
const ux = document.getElementById('ux')

ui_btn.addEventListener('change', (e) => {
	if (e.currentTarget.ckecked) {
		ui.style.display = 'block';
		ux.style.display = 'none';
	} else {
		ui.style.display = 'none';
		ux.style.display = 'block';
	}
})
ux_btn.addEventListener('change', (e) => {
	if (e.currentTarget.ckecked) {
		ui.style.display = 'none';
		ux.style.display = 'block';
	} else {
		ui.style.display = 'block';
		ux.style.display = 'none';
	}
})
