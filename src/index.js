import { askUserNameAfterGreeting, askAnswer } from './cli.js';

export default function startGame(params) {
  const {
    description,
    questionGenerator,
  } = params;

  const userName = askUserNameAfterGreeting();

  console.log(description);

  for (let i = 0; i < 3; i++) {
    const {
      question,
      answer,
    } = questionGenerator();

    console.log(`Question: ${question}`);

    const userAnswer = askAnswer();

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}
