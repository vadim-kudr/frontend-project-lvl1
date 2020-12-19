import startGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

function questionGenerator() {
  const number = generateRandomNumber();

  return {
    question: number,
    answer: isPrime(number) ? 'yes' : 'no',
  };
}

export default function primeGame() {
  startGame({
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    questionGenerator,
  });
}
