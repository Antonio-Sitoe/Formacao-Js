import { contentList } from '../Context.js';
import ComponentError from './ComponentError.js';
import Template from './Template.js';

const ComponentDidMount = (json) => {
  if (typeof json === 'string') {
    return ComponentError(json);
  }

  if (contentList) {
    json.forEach((item) => {
      contentList.innerHTML += Template(item);
    });
  }
};

export default ComponentDidMount;
