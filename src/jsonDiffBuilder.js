import _ from 'lodash';

const added = 'added';
const deleted = 'deleted';
const changed = 'changed';
const unchanged = 'unchanged';
const prefixUnchanged = '    ';
const prefixAdded = '  + ';
const prefixDeleted = '  - ';

const genDiff = (data1, data2) => {
  const keysFirstFile = Object.keys(data1);
  const keysSecondFile = Object.keys(data2);
  const keys = _.union(keysFirstFile, keysSecondFile);

  const result = keys.reduce((acc, key) => {
    if (!_.has(data1, key)) {
      return { ...acc, [key]: added };
    }
    if (!_.has(data2, key)) {
      return { ...acc, [key]: deleted };
    }
    if (data1[key] !== data2[key]) {
      return { ...acc, [key]: changed };
    }
    return { ...acc, [key]: unchanged };
  }, {});

  return result;
};

const genDiffString = (data1, data2) => {
  const diff = genDiff(data1, data2);
  const sortedKeys = (_.sortBy(Object.keys(diff)));
  const resultArr = sortedKeys.flatMap((key) => {
    const item1 = `${key}: ${data1[key]}`;
    const item2 = `${key}: ${data2[key]}`;
    const diffValue = diff[key];

    if (diffValue === unchanged) {
      return `${prefixUnchanged}${item1}`;
    }

    if (diffValue === added) {
      return `${prefixAdded}${item2}`;
    }
    if (diffValue === deleted) {
      return `${prefixDeleted}${item1}`;
    }
    return [`${prefixDeleted}${item1}`, `${prefixAdded}${item2}`];
  });

  return ['{', ...resultArr, '}'].join('\n');
};

export { genDiff, genDiffString };
