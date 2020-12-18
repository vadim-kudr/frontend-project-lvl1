import startGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function answerCalculator(number) {
  const isEven = number % 2 === 0;
  return isEven ? 'yes' : 'no';
}

export default function evenGame() {
  startGame({
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    questionGenerator: generateRandomNumber,
    answerCalculator,
  });
}
