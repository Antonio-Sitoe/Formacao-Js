import MenuMobile from './modules/MenuMobile.js';
import ToggleCategory from './modules/ToggleCategory.js';
import FilteredData from './modules/FilteredData.js';
import FetchDataInit from './modules/FetchDataInit.js';
import { BaseUrl } from './modules/helper/Helper.js';


const menuMobile = MenuMobile('.btn-mobile', '.header-list', 'ative');
const toogleCategory = ToggleCategory('.main-category', '.spanBtn', 'ative');
const filterData = FilteredData();

menuMobile.init();
toogleCategory.init();
filterData.init();
FetchDataInit(BaseUrl);


