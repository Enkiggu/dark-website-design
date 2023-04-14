const dropDown = document.querySelector('#dropdown-button');
const dropDownMenu = document.querySelector('#dropdown-menu');

dropDown.addEventListener('click', () => {
    dropDownMenu.classList.toggle('hidden');
});