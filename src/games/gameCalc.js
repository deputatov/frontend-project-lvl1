import { getRandomInt } from '../lib/mylib';

const getRandomQuestionAndCorrectAnswer = () => {
  const minOperationIndex = 0;
  const maxOperationIndex = 3;
  const indRandomOperation = getRandomInt(minOperationIndex, maxOperationIndex);

  const minValue = 0;
  const maxValue = 20;
  const randomInt1 = getRandomInt(minValue, maxValue);
  const randomInt2 = getRandomInt(minValue, maxValue);

  const operations = [
    [`${randomInt1} + ${randomInt2}`, (randomInt1 + randomInt2).toString()],
    [`${randomInt1} - ${randomInt2}`, (randomInt1 - randomInt2).toString()],
    [`${randomInt1} * ${randomInt2}`, (randomInt1 * randomInt2).toString()],
  ];

  return operations[indRandomOperation];
};

const gameData = {
  description: 'What is the result of the expression?\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

export default gameData;
