import randomInt from '../lib/randomInt';
import startGame from '..';

const description = 'What is the result of the expression?\n';

const arithmeticOperations = {
  '+': (val1, val2) => val1 + val2,
  '-': (val1, val2) => val1 - val2,
  '*': (val1, val2) => val1 * val2,
};

const mathSigns = Object.keys(arithmeticOperations);

const getQuestionAnswer = () => {
  const number1 = randomInt(0, 20);
  const number2 = randomInt(0, 20);
  const mathSign = mathSigns[randomInt(0, mathSigns.length - 1)];
  const gameQuestion = `${number1} ${mathSign} ${number2}`;
  const correctAnswer = arithmeticOperations[mathSign](number1, number2).toString();
  return [gameQuestion, correctAnswer];
};

export default () => startGame(description, getQuestionAnswer);
