const dropDown = document.querySelector('#dropdown-button');
const dropDownMenu = document.querySelector('#dropdown-menu');

dropDown.addEventListener('click', () => {
    dropDownMenu.classList.toggle('hidden');
});


ScrollReveal().reveal('.ani1', { delay: 500 });
ScrollReveal().reveal('.ani2', { delay: 750 });
ScrollReveal().reveal('.ani3', { delay: 1000 });
