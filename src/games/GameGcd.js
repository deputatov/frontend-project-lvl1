import { getRandomInt } from '../lib/mylib';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getRandomQuestionAndCorrectAnswer = () => {
  const a = getRandomInt(40, 51);
  const b = getRandomInt(5, 21);
  return [`${a} ${b}`, gcd(a, b).toString()];
};

const gameData = {
  description: 'Find the greatest common divisor of given numbers.\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

export default gameData;
