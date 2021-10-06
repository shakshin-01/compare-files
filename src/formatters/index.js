import stylish from './stylish.js';
import plain from './plain.js';

const mapping = {
  stylish,
  plain,
};

export default (data, formatter) => mapping[formatter](data);
