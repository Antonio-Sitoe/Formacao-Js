import FetchData from './FetchData.js';
import { BaseUrl } from './helper/Helper.js';
import ShowInfoProduts from './ShowInfoProduts.js';

const FetchDataInit = async (url) => {
  const fetchData = FetchData();
  const showInfoProduts = ShowInfoProduts();

  await fetchData.init(url);
  showInfoProduts.init();
};

export default FetchDataInit;
