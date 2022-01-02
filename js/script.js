const btnToggle = document.querySelector('.btn__toggle');
const curriculum = document.querySelector('.curriculum');
const sideLeft = document.querySelector('.curriculum__side-left');

btnToggle.addEventListener('click', event => {

    event.preventDefault();
    sideLeft.classList.toggle('currculum__side-left--hidden');
    // main.classList.toggle('main--width-100');
});

window.addEventListener('resize', event => {
    if(window.innerWidth >= 1150) {

        sideLeft.classList.remove('currculum__side-left--hidden');
    } else {

        sideLeft.classList.add('currculum__side-left--hidden');
    }
})