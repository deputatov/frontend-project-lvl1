import randomInt from '../lib/randomInt';
import startGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = (num) => num % 2 === 0;

const getQuestionAnswer = () => {
  const gameQuestion = randomInt(0, 100);
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

export default () => startGame(description, getQuestionAnswer);
