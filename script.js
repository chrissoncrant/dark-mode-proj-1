const checkbox = document.querySelector('input');
const themeSwitch = document.querySelector('.theme-switch');
const toggleIcons= document.getElementById('toggle-icon').children;
const image1 = document.getElementById('img-1');
const image2 = document.getElementById('img-2');
const image3 = document.getElementById('img-3');

themeSwitch.addEventListener('click', () => {
    const icon = document.querySelector('.fa-solid');
    const toggleText = document.querySelector('.toggle-text');
    if (!checkbox.checked) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-star-and-crescent');
        toggleText.textContent = 'Dark Mode';
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('outline-disabled-btn').classList.add('dark-outline');
        document.getElementById('text-box').style.color = '#ffffffe6';
        Array.from(toggleIcons).forEach(el => {
            el.style.color = "#9641ff"
        });
        image1.setAttribute('src', './images/undraw_nature_on_screen_xkli-dark.svg');
        image2.setAttribute('src', './images/undraw_explore_re_8l4v-dark.svg');
        image3.setAttribute('src', './images/undraw_through_the_park_lxnl-dark.svg');
    } else {
        icon.classList.add('fa-sun');
        icon.classList.remove('fa-star-and-crescent');
        toggleText.textContent = 'Light Mode';
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById('outline-disabled-btn').classList.remove('dark-outline');
        document.getElementById('text-box').style.color = '#fafafa';
        Array.from(toggleIcons).forEach(el => {
            el.style.color = "#424242";
        })
        image1.setAttribute('src', './images/undraw_nature_on_screen_xkli-light.svg');
        image2.setAttribute('src', './images/undraw_explore_re_8l4v-light.svg');
        image3.setAttribute('src', './images/undraw_through_the_park_lxnl-light.svg');
    };
});