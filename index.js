const locales = {
  en: {
    LANGUAGE_SELECTOR: 'EN',
  },
  ru: {
    LANGUAGE_SELECTOR: 'RU',
  }
}

let currentLocale = 'en';

function translate() {
  const translatableNodes = document.querySelectorAll('[data-translation-key]');
  currentLocale = currentLocale === 'en' ? 'ru' : 'en';
  const activeLocale = locales[currentLocale];

  translatableNodes.forEach((node) => {
    node.textContent = activeLocale[node.getAttribute('data-translation-key')];
  })
}


const translationButton = document.querySelector('#translate');
const openMenuButton = document.querySelector('#open-menu');
const closeMenuButton = document.querySelector('#close-menu');

function openMobileMenu() {
  const mobileMenu = document.querySelector('#mobile-menu');

  mobileMenu.style.display = 'block';
  closeMenuButton.style.display = 'block';
  openMenuButton.style.display = 'none';
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const mobileMenu = document.querySelector('#mobile-menu');

  mobileMenu.style.display = 'none';
  openMenuButton.style.display = 'block';
  closeMenuButton.style.display = 'none';
  document.body.style.overflow = 'unset';
}

if (translationButton) {
  translationButton.addEventListener('click', translate);
}

if (openMenuButton) {
  openMenuButton.addEventListener('click', openMobileMenu);
}

if (closeMenuButton) {
  closeMenuButton.addEventListener('click', closeMobileMenu);
}