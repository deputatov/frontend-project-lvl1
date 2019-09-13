import { getRandomInt } from '../lib/mylib';

const getRandomArray = (filler, inc, len = 10) => Array(len)
  .fill(filler)
  .map((val, ind) => val + inc * ind);

const getRandomQuestionAndCorrectAnswer = () => {
  const filler = getRandomInt(1, 11);
  const increment = getRandomInt(1, 8);
  const gapIndex = getRandomInt(0, 10);
  const arr = getRandomArray(filler, increment);
  const correctAnswer = arr[gapIndex];
  arr[gapIndex] = '..';
  return [arr.join(' '), correctAnswer.toString()];
};

const gameData = {
  description: 'What number is missing in the progression?\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

export default gameData;
