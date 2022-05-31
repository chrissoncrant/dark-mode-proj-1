const checkbox = document.querySelector('input');
const themeSwitch = document.querySelector('.theme-switch');

themeSwitch.addEventListener('click', () => {
    const icon = document.querySelector('.fa-solid');
    const toggleText = document.querySelector('.toggle-text');
    if (!checkbox.checked) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-star-and-crescent');
        toggleText.textContent = 'Dark Mode';
    } else {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-star-and-crescent');
        toggleText.textContent = 'Light Mode';
    }
});