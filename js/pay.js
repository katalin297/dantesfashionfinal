const pConfirmation = document.querySelector('.pconfirmation');
const confirm = document.getElementById('confirmation');

pConfirmation.addEventListener('mousedown', confirmation);

function confirmation() {
    confirm.classList.add('show-confirmation');
    setTimeout(unconfirmation, 4000);
}

function unconfirmation() {
    confirm.classList.remove('show-confirmation');
}
