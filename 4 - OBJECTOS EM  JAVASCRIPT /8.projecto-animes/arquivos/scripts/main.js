import Modal from './modules/modal.js';
import Scroll from './modules/Scroll.js';
import { getSrc } from './utils.js';

const modal = Modal('[data-modal]', '[data-btn="video"]');
const scroll = Scroll('.buttonArrow', '[data-sections]', getSrc);

modal.initModal();
scroll.init();
AOS.init();
