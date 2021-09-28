#!/usr/bin/env node

import program from 'commander';
import genDiffString from '../index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiffString(filepath1, filepath2));
  });
program.parse();

program.opts();
