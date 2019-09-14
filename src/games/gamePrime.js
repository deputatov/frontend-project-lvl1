import { getRandomInt } from '../lib/mylib';
import startGame from '..';

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRandomQuestionAndCorrectAnswer = () => {
  const gameQuestion = getRandomInt(1, 100);
  return [gameQuestion, isPrime(gameQuestion) ? 'yes' : 'no'];
};

const gameData = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

const startGamePrime = () => startGame(gameData);

export default startGamePrime;
