import getRandomInt from '../lib/mylib';
import playGame from '..';

const description = 'Find the greatest common divisor of given numbers.\n';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};

const getQuestionAnswer = () => {
  const number1 = getRandomInt(40, 50);
  const number2 = getRandomInt(5, 20);
  const gameQuestion = `${number1} ${number2}`;
  const correctAnswer = getGreatestCommonDivisor(number1, number2).toString();
  return [gameQuestion, correctAnswer];
};

export default () => playGame(description, getQuestionAnswer);
