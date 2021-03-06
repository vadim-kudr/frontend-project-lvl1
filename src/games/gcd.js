import playGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function findGCD(a, b) {
  if (!b) {
    return a;
  }

  return findGCD(b, a % b);
}

function generateTask() {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();

  const gcd = findGCD(firstNumber, secondNumber);

  return {
    question: `${firstNumber} ${secondNumber}`,
    answer: String(gcd),
  };
}

export default function gcdGame() {
  playGame({
    description: 'Find the greatest common divisor of given numbers.',
    generateTask,
  });
}
