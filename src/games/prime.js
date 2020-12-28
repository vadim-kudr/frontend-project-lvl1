import playGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function generateTask() {
  const number = generateRandomNumber(0, 100);

  return {
    question: number,
    answer: isPrime(number) ? 'yes' : 'no',
  };
}

export default function primeGame() {
  playGame({
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateTask,
  });
}
