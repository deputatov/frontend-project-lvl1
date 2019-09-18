import randomInt from '../lib/randomInt';
import startGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const gameQuestion = randomInt(1, 100);
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => startGame(description, getQuestionAnswer);
