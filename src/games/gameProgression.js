import { getRandomInt } from '../lib/mylib';
import startGame from '..';

const getRandomSequenceOfNumbers = (filler, inc, len = 10) => Array(len)
  .fill(filler)
  .map((val, ind) => val + inc * ind);

const getRandomQuestionAndCorrectAnswer = () => {
  const filler = getRandomInt(1, 11);
  const increment = getRandomInt(1, 8);
  const gapIndex = getRandomInt(0, 10);
  const sequence = getRandomSequenceOfNumbers(filler, increment);
  const correctAnswer = sequence[gapIndex];
  sequence[gapIndex] = '..';
  return [sequence.join(' '), correctAnswer.toString()];
};

const gameData = {
  description: 'What number is missing in the progression?\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

const startGameProgression = () => startGame(gameData);

export default startGameProgression;
