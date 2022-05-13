import ComponentDidMount from './components/ComponentDidMount.js';
import Loading from './helper/Loading.js';
import { ErrorMessage } from './helper/Helper.js';

const FetchData = () => {
  async function init(url) {
    Loading(true);
    let response;
    let json;
    try {
      response = await fetch(url);
      if (!response.ok) throw new Error(ErrorMessage);
      json = await response.json();
    } catch (error) {
      json = error.toString();
    } finally {
      ComponentDidMount(json);
      Loading(false);
    }
    return json;
  }

  return {
    init,
  };
};

export default FetchData;
