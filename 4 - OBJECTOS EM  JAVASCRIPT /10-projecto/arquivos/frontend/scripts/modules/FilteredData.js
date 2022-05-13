import { BaseUrl } from './helper/Helper.js';
import FetchData from './FetchData.js';
import { contentList, mainList } from './Context.js';
import ShowInfoProduts from './ShowInfoProduts.js';
import FetchDataInit from './FetchDataInit.js';

const data = FetchData();

const FilteredData = () => {
  const label = document.querySelectorAll('.main-list li label');

  function fetchDateFiltered(e) {
    const elements = contentList && contentList.querySelectorAll('li');
    elements.forEach((li) => li.remove());

    const category = e.target.innerText.trim();
    if (category !== 'Todos os pratos') {
      FetchDataInit(`${BaseUrl}?category=${category}`);
    } else {
      FetchDataInit(`${BaseUrl}`);
    }
  }

  function init() {
    if (mainList) {
      label.forEach((li) => {
        li.addEventListener('click', fetchDateFiltered);
      });
    }
  }

  return { init };
};

export default FilteredData;
