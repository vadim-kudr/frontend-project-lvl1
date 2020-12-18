import { askUserNameAfterGreeting, askAnswer } from './cli.js';

export default function startGame(params) {
  const {
    description,
    questionGenerator,
    answerCalculator,
  } = params;

  const userName = askUserNameAfterGreeting();

  console.log(description);

  for (let i = 0; i < 3; i++) {
    const question = questionGenerator();

    console.log(`Question: ${question}`);

    const answer = askAnswer();
    const rightAnswer = answerCalculator(question);

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}
