import getRandomInt from '../utils';
import playGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAnswer = () => {
  const gameQuestion = getRandomInt(1, 100);
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => playGame(description, getQuestionAnswer);
