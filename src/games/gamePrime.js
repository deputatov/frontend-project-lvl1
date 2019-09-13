import { getRandomInt, isPrime } from '../lib/mylib';

const getRandomQuestionAndCorrectAnswer = () => {
  const randomInt = getRandomInt(1, 101);
  return [randomInt, isPrime(randomInt) ? 'yes' : 'no'];
};

const gameData = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

export default gameData;
