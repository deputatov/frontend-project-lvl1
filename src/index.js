import readlineSync from 'readline-sync';

const questionsCount = 3;

export default (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const askAQuestion = (counter) => {
    if (counter === 0) {
      return `Congratulations, ${playerName}!`;
    }
    const [gameQuestion, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${gameQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return askAQuestion(counter - 1);
    }
    return `'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, ${playerName}!'`;
  };

  console.log(askAQuestion(questionsCount));
};
