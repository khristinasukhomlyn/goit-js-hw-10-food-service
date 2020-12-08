// Подключение объектов в HTML

import templateRef from '../templates/menu-list.hbs';
import menuArrayRef from "../menu.json";

const markupMenu = document.querySelector('.js-menu');

const templateFillIn = templateRef(menuArrayRef);

markupMenu.insertAdjacentHTML('afterbegin', templateFillIn);