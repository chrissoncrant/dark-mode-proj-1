const checkbox = document.querySelector('input');
const themeSwitch = document.querySelector('.theme-switch');

let count = 0;
themeSwitch.addEventListener('click', (e) => {
    const icon = document.querySelector('.fa-solid');
    count++;
    console.log(count);

    console.log(icon);
})