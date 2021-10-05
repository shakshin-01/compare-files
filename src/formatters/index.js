import stylish from './stylish.js';

const mapping = {
  stylish,
};

export default (data, formatter) => mapping[formatter](data);
