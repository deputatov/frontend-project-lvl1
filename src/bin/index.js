#!/usr/bin/env node

import readlineSunc from 'readline-sync';

console.log('Welcome to the Brain Games!\n');
const actual = readlineSunc.question('May I have your name? ');
console.log(`Hello, ${actual}!`);