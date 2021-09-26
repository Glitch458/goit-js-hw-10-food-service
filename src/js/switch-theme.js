const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const themeSwitcherEl = document.querySelector('#theme-switch-toggle');

// SWITCHER
bodyEl.classList.add(Theme.LIGHT);

themeSwitcherEl.addEventListener('click', evt => {
  bodyEl.classList.toggle(Theme.LIGHT);
  bodyEl.classList.toggle(Theme.DARK);
  localStorage.setItem('currentTheme', bodyEl.className);
});

// LOCAL STORAGE
bodyEl.className = localStorage.getItem('currentTheme');

if (bodyEl.className === Theme.DARK) {
  themeSwitcherEl.checked = true;
}
