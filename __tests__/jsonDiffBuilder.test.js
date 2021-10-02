import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import { genDiffString } from '../src/jsonDiffBuilder';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFile = (fileName) => readFileSync(getFixturePath(fileName), 'utf-8');

test('genDiffString', () => {
  const firstFile = JSON.parse(readFile('file1.json'));
  const secondFile = JSON.parse(readFile('file2.json'));
  const expectedResult = readFile('jsonResult.txt');
  const actualResult = genDiffString(firstFile, secondFile);
  expect(actualResult).toEqual(expectedResult);
});
