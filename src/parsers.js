import { load } from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yml: load,
  yaml: load,
};

export default (textData, format) => parsers[format](textData);
