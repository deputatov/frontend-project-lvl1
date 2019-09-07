#!/usr/bin/env node

import brainGames from '../brain-games';
import { getRandomInt, isEven } from '../mathFunc';

const gameData = {
  description: 'Answer "yes" if number even otherwise answer "no".\n',
  getQuestionAnswer: () => {
    const ranNum = getRandomInt(1, 100);
    return [ranNum, isEven(ranNum) ? 'yes' : 'no'];
  },
};

brainGames(gameData);
