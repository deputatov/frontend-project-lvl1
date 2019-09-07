#!/usr/bin/env node

import brainGames from '../brain-games';
import { getRandomInt } from '../mathFunc';

const getRandomOperation = () => {
  const n = getRandomInt(0, 3);
  const operand1 = getRandomInt(1, 20);
  const operand2 = getRandomInt(1, 10);
  const operations = [
    [`${operand1} + ${operand2}`, (operand1 + operand2).toString()],
    [`${operand1} - ${operand2}`, (operand1 - operand2).toString()],
    [`${operand1} * ${operand2}`, (operand1 * operand2).toString()],
  ];
  return operations[n];
};

const gameData = {
  description: 'What is the result of the expression?\n',
  getQuestionAnswer: () => getRandomOperation(),
};

brainGames(gameData);
