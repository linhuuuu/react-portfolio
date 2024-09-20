let contactForm = document.getElementById('contact-form')

function formSubmit(event) {
    alert('Message  Sent.');
    contactForm.reset();
    event.preventDefault();
}
contactForm.addEventListener('submit', formSubmit)
