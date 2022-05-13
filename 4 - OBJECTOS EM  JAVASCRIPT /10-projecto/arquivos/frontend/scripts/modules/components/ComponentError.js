import { mainTitle, mainList } from '../Context.js';
import { AlertMesssageOfFilterElements } from '../helper/Helper.js';

const ComponentError = (json) => {
  if (mainList.length) {
    mainList.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        window.alert(AlertMesssageOfFilterElements);
      });
    });
  }
  if (mainTitle) {
    mainTitle.innerText = 'Do Momento, temos 1 prato disponivel';
  }
};

export default ComponentError;
