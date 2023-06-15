const form = document.getElementById('contacts_form')

form.addEventListener('submit', (e) => {
	e.preventDefault();
	alert(form.elements.name.value + ' ' + form.elements.mail.value + ' ' + form.elements.comment.value)
})