import readlineSync from 'readline-sync';

const questionsCount = 3;

export default (gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameData.description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const askAQuestion = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return true;
    }
    const [randomQuestion, correctAnswer] = gameData.getQuestionAnswer();
    console.log(`Question: ${randomQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return askAQuestion(counter - 1);
    }
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!'`);
    return false;
  };

  askAQuestion(questionsCount);
};
