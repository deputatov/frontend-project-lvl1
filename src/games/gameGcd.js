import { getRandomInt } from '../lib/mylib';
import startGame from '..';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};

const getRandomQuestionAndCorrectAnswer = () => {
  const randomNumber1 = getRandomInt(40, 50);
  const randomNumber2 = getRandomInt(5, 20);

  return [`${randomNumber1} ${randomNumber2}`,
    getGreatestCommonDivisor(randomNumber1, randomNumber2).toString()];
};

const gameData = {
  description: 'Find the greatest common divisor of given numbers.\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

const startGameGcd = () => startGame(gameData);

export default startGameGcd;
