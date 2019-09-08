#!/usr/bin/env node

import brainGames from '../brain-games';
import { getRandomInt, isEven } from '../mathFunc';

const getRandomQuestionAndCorrectAnswer = () => {
  const ranNum = getRandomInt(1, 101);
  return [ranNum, isEven(ranNum) ? 'yes' : 'no'];
};

const gameData = {
  description: 'Answer "yes" if number even otherwise answer "no".\n',
  getQuestionAnswer: getRandomQuestionAndCorrectAnswer,
};

brainGames(gameData);
