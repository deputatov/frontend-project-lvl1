import { getRandomInt } from '../lib/mylib';
import startGame from '..';

const getRandomQuestionAndCorrectAnswer = () => {
  const randomNumber1 = getRandomInt(0, 20);
  const randomNumber2 = getRandomInt(0, 20);

  const arithmeticOperations = {
    '+': (val1, val2) => val1 + val2,
    '-': (val1, val2) => val1 - val2,
    '*': (val1, val2) => val1 * val2,
  };

  const mathSigns = Object.keys(arithmeticOperations);

  const randomMathSign = mathSigns[
    Math.floor(Math.random() * mathSigns.length)];

  const gameQuestion = `${randomNumber1} ${randomMathSign} ${randomNumber2}`;

  const correctAnswer = arithmeticOperations[
    randomMathSign](randomNumber1, randomNumber2).toString();

  return [gameQuestion, correctAnswer];
};

const gameData = {
  description: 'What is the result of the expression?\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

const startGameCalc = () => startGame(gameData);

export default startGameCalc;
