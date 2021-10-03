import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import { genDiffString } from '../src/jsonDiffBuilder';
import parse from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFile = (fileName) => readFileSync(getFixturePath(fileName), 'utf-8');

test('compare .json files', () => {
  const firstFile = parse(readFile('file1.json'), '.json');
  const secondFile = parse(readFile('file2.json'), '.json');
  const expectedResult = readFile('compareResult.txt');
  const actualResult = genDiffString(firstFile, secondFile);
  expect(actualResult).toEqual(expectedResult);
});

test('compare .yml files', () => {
  const firstFile = parse(readFile('file1.yml'), '.yml');
  const secondFile = parse(readFile('file2.yml'), '.yml');
  const expectedResult = readFile('compareResult.txt');
  const actualResult = genDiffString(firstFile, secondFile);
  expect(actualResult).toEqual(expectedResult);
});
