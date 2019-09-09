import readlineSync from 'readline-sync';

const maxNumberOfQuestions = 3;

export default (gameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameData.description);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const askAQuestion = (questionsCount) => {
    if (questionsCount === 0) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const [randomQuestion, correctAnswer] = gameData.getQuestionAnswer();
    console.log(`Question: ${randomQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return askAQuestion(questionsCount - 1);
    }
    return console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${playerName}!'`);
  };

  askAQuestion(maxNumberOfQuestions);
};
