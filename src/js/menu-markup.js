import cards from '../menu.json';
import menuTpl from '../temlpates/menu-card.hbs';

const menuList = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(cards);

menuList.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(cards) {
  return menuTpl(cards);
}
