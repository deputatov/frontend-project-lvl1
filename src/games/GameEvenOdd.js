import { getRandomInt, isEven } from '../lib/mylib';

const getRandomQuestionAndCorrectAnswer = () => {
  const num = getRandomInt(1, 101);
  return [num, isEven(num) ? 'yes' : 'no'];
};

const gameData = {
  description: 'Answer "yes" if number even otherwise answer "no".\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

export default gameData;
