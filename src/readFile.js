import { readFileSync } from 'fs';

const getObjectFromFile = (pathToFile) => JSON.parse(readFileSync(pathToFile, 'utf-8'));

export default getObjectFromFile;
