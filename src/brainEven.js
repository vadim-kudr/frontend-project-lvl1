import { askUserNameAfterGreeting, askAnswer } from './cli.js';

function isEvenNumber(number) {
  return number % 2 === 0;
}

function isValidAnswer(answer) {
  return ['yes', 'no'].includes(answer);
}

function isRightAnswer(number, answer) {
  if (!isValidAnswer(answer)) {
    return false;
  }

  const isEven = isEvenNumber(number);

  if (isEven && answer === 'yes') {
    return true;
  }

  if (!isEven && answer === 'no') {
    return true;
  }

  return false;
}

function generateRandomNumber() {
  return Math.floor(Math.random() * Math.floor(100));
}

export default function startBrainEvenGame() {
  const name = askUserNameAfterGreeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const number = generateRandomNumber();

    console.log(`Question: ${number}`);

    const answer = askAnswer();

    if (!isRightAnswer(number, answer)) {
      const correctAnswer = isEvenNumber(number) ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
