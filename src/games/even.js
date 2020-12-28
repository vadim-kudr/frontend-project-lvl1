import playGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function isEven(number) {
  return number % 2 === 0;
}

function generateTask() {
  const number = generateRandomNumber();

  return {
    question: number,
    answer: isEven(number) ? 'yes' : 'no',
  };
}

export default function evenGame() {
  playGame({
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    generateTask,
  });
}
