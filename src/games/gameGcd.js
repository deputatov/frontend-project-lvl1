import { getRandomInt } from '../lib/mylib';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getRandomQuestionAndCorrectAnswer = () => {
  const minValue1 = 40;
  const maxValue1 = 50;
  const randomInt1 = getRandomInt(minValue1, maxValue1);

  const minValue2 = 5;
  const maxValue2 = 20;
  const randomInt2 = getRandomInt(minValue2, maxValue2);

  return [`${randomInt1} ${randomInt2}`, gcd(randomInt1, randomInt2).toString()];
};

const gameData = {
  description: 'Find the greatest common divisor of given numbers.\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

export default gameData;
