import { genDiffString } from './src/jsonDiffBuilder.js';
import getObjectFromFile from './src/readFile.js';

export default (filePath1, filePath2) => {
  const object1 = getObjectFromFile(filePath1);
  const object2 = getObjectFromFile(filePath2);

  const diffString = genDiffString(object1, object2);

  return diffString;
};
