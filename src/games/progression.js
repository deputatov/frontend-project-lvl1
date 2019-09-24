import getRandomInt from '../utils';
import playGame from '..';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const getSequence = (filler, increment, length) => Array(length)
  .fill(filler)
  .map((value, index) => value + increment * index);

const getQuestionAnswer = () => {
  const filler = getRandomInt(1, 10);
  const increment = getRandomInt(1, 7);
  const sequence = getSequence(filler, increment, progressionLength);
  const gapIndex = getRandomInt(0, sequence.length - 1);
  const correctAnswer = sequence[gapIndex];
  sequence[gapIndex] = '..';
  return [sequence.join(' '), correctAnswer.toString()];
};

export default () => playGame(description, getQuestionAnswer);
