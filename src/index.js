import readlineSync from 'readline-sync';

const questionsCount = 3;

const playGame = (description, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const askQuestion = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const [gameQuestion, correctAnswer] = questionAndAnswer();
    console.log(`Question: ${gameQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!'`);
      return;
    }
    console.log('Correct!');
    askQuestion(counter - 1);
  };
  askQuestion(questionsCount);
};

export default playGame;
