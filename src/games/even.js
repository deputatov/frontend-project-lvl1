import getRandomInt from '../lib/mylib';
import playGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const gameQuestion = getRandomInt(0, 100);
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => playGame(description, getQuestionAnswer);
