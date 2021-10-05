import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yml1 = getFixturePath('file1.yml');
const yml2 = getFixturePath('file2.yml');
const result = fs.readFileSync(getFixturePath('stylishResult.txt'), 'utf-8');

test('Compare .json files', () => {
  expect(genDiff(json1, json2)).toBe(result);
});

test('Compare .yml files', () => {
  expect(genDiff(yml1, yml2)).toBe(result);
});
