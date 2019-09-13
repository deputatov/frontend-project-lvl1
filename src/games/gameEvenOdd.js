import { getRandomInt, isEven } from '../lib/mylib';

const getRandomQuestionAndCorrectAnswer = () => {
  const minValue = 0;
  const maxValue = 100;
  const randomInt = getRandomInt(minValue, maxValue);
  return [randomInt, isEven(randomInt) ? 'yes' : 'no'];
};

const gameData = {
  description: 'Answer "yes" if number even otherwise answer "no".\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

export default gameData;
