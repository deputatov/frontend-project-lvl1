import { getRandomInt } from '../lib/mylib';
import startGame from '..';

export const isEven = (num) => num % 2 === 0;

const getRandomQuestionAndCorrectAnswer = () => {
  const gameQuestion = getRandomInt(0, 100);
  return [gameQuestion, isEven(gameQuestion) ? 'yes' : 'no'];
};

const gameData = {
  description: 'Answer "yes" if number even otherwise answer "no".\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

const startEvenOddGame = () => startGame(gameData);

export default startEvenOddGame;
