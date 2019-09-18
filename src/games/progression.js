import randomInt from '../lib/randomInt';
import startGame from '..';

const description = 'What number is missing in the progression?\n';

const getSequenceOfNumbers = (filler, inc, len = 10) => Array(len)
  .fill(filler)
  .map((val, ind) => val + inc * ind);

const getQuestionAnswer = () => {
  const filler = randomInt(1, 10);
  const increment = randomInt(1, 7);
  const sequence = getSequenceOfNumbers(filler, increment);
  const gapIndex = randomInt(0, sequence.length - 1);
  const correctAnswer = sequence[gapIndex];
  sequence[gapIndex] = '..';
  return [sequence.join(' '), correctAnswer.toString()];
};

export default () => startGame(description, getQuestionAnswer);
