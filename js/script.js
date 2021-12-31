const btnToggle = document.querySelector('.btn__toggle');
const curriculum = document.querySelector('.curriculum');

btnToggle.addEventListener('click', event => {

    event.preventDefault();
    curriculum.classList.toggle('currculum--side-left-hidden');
});