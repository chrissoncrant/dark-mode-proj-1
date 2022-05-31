const checkbox = document.querySelector('input');
const themeSwitch = document.querySelector('.theme-switch');
const toggleIcons= document.getElementById('toggle-icon').children;
const image1 = document.getElementById('img-1');
const image2 = document.getElementById('img-2');
const image3 = document.getElementById('img-3');

const theme = localStorage.getItem('theme');




themeSwitch.addEventListener('click', () => {
    const icon = document.querySelector('.fa-solid');
    const toggleText = document.querySelector('.toggle-text');
    console.log('test')
    if (!checkbox.checked) {
        icon.classList.replace('fa-sun', 'fa-star-and-crescent');
        toggleText.textContent = 'Dark Mode';
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('outline-disabled-btn').classList.add('dark-outline');
        document.getElementById('text-box').style.color = '#ffffffe6';
        Array.from(toggleIcons).forEach(el => {
            el.style.color = "#9641ff"
        });
        changeImages('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-star-and-crescent', 'fa-sun');
        toggleText.textContent = 'Light Mode';
        document.documentElement.setAttribute('data-theme', 'light')
        document.getElementById('outline-disabled-btn').classList.remove('dark-outline');
        document.getElementById('text-box').style.color = '#fafafa';
        Array.from(toggleIcons).forEach(el => {
            el.style.color = "#424242";
        })
        changeImages('light');
        localStorage.setItem('theme', 'light');
    };
});

function changeImages(color) {
    image1.setAttribute('src', `./images/undraw_nature_on_screen_xkli-${color}.svg`);
    image2.setAttribute('src', `./images/undraw_explore_re_8l4v-${color}.svg`);
    image3.setAttribute('src', `./images/undraw_through_the_park_lxnl-${color}.svg`);
}

if (theme === null || theme === 'light') {
    checkbox.checked = false;
} else {
    themeSwitch.click();
};