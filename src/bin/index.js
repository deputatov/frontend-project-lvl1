#!/usr/bin/env node

import readlineSync from 'readline-sync';

const numberOfQuestions = 3;

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (number) => number % 2 === 0;

const convertAnswer = (answer) => {
  if (typeof answer === 'string') {
    return answer;
  }
  if (answer) {
    return 'yes';
  }
  return 'no';
};

const startGame = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const askAQuestion = (questionsCount) => {
    if (questionsCount === 0) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const randomNumber = getRandomInt();
    console.log(`Question: ${randomNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ', { trueValue: ['yes'], falseValue: ['no'] });
    const correctAnswer = isEven(randomNumber);
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return askAQuestion(questionsCount - 1);
    }
    return console.log(`'${convertAnswer(playerAnswer)}' is wrong answer ;(. Correct answer was '${convertAnswer(correctAnswer)}'.\nLet's try again, ${playerName}!'`);
  };

  askAQuestion(numberOfQuestions);
};

startGame();
