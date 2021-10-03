import { readFileSync } from 'fs';
import path from 'path';
import parse from './parsers.js';

const getObjectFromFile = (pathToFile) => parse(readFileSync(pathToFile, 'utf-8'), path.extname(pathToFile));

export default getObjectFromFile;
