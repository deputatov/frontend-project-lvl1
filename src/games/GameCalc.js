import { getRandomInt } from '../lib/mylib';

const getRandomQuestionAndCorrectAnswer = () => {
  const n = getRandomInt(0, 3);
  const operand1 = getRandomInt(1, 21);
  const operand2 = getRandomInt(1, 16);
  const operations = [
    [`${operand1} + ${operand2}`, (operand1 + operand2).toString()],
    [`${operand1} - ${operand2}`, (operand1 - operand2).toString()],
    [`${operand1} * ${operand2}`, (operand1 * operand2).toString()],
  ];
  return operations[n];
};

const gameData = {
  description: 'What is the result of the expression?\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

export default gameData;
