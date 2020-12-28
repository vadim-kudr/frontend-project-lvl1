import readlineSync from 'readline-sync';

function ask(question) {
  return readlineSync.question(question);
}

export default function playGame(params) {
  const {
    description,
    generateTask,
    roundsCount = 3,
  } = params;

  console.log('Welcome to the Brain Games!');
  const userName = ask('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const {
      question,
      answer,
    } = generateTask();

    console.log(`Question: ${question}`);

    const userAnswer = ask('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}
