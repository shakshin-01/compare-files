import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yml1 = getFixturePath('file1.yml');
const yml2 = getFixturePath('file2.yml');
const resultDefault = fs.readFileSync(getFixturePath('stylishResult.txt'), 'utf-8');
const resultPlain = fs.readFileSync(getFixturePath('plainResult.txt'), 'utf-8');
const resultJson = fs.readFileSync(getFixturePath('jsonResult.txt'), 'utf-8');

test('Compare .json files with default formatter', () => {
  expect(genDiff(json1, json2)).toBe(resultDefault);
});

test('Compare .yml files with default formatter', () => {
  expect(genDiff(yml1, yml2)).toBe(resultDefault);
});

test('Compare .json files with plain formatter', () => {
  expect(genDiff(json1, json2, 'plain')).toBe(resultPlain);
});

test('Compare .yml files with plain formatter', () => {
  expect(genDiff(yml1, yml2, 'plain')).toBe(resultPlain);
});

test('Compare .json files with json formatter', () => {
  expect(genDiff(json1, json2, 'json')).toBe(resultJson);
});

test('Compare .yml files with json formatter', () => {
  expect(genDiff(yml1, yml2, 'json')).toBe(resultJson);
});
