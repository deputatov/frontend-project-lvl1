import getRandomInt from '../utils';
import playGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAnswer = () => {
  const gameQuestion = getRandomInt(0, 100);
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => playGame(description, getQuestionAnswer);
