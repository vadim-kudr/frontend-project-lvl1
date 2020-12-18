import startGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function findGCD(a, b) {
  if (!b) {
    return a;
  }

  return findGCD(b, a % b);
}

function questionGenerator() {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  return `${firstNumber} ${secondNumber}`;
}

function answerCalculator(expression) {
  const [
    firstNumber,
    secondNumber,
  ] = expression.split(' ');

  const gcd = findGCD(firstNumber, secondNumber);
  return String(gcd);
}

export default function calcGame() {
  startGame({
    description: 'What is the result of the expression?',
    questionGenerator,
    answerCalculator
  });
}
