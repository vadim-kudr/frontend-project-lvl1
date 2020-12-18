import startGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function generateRandomMathOperator() {
  const operators = ['+', '-', '*'];
  const index = generateRandomNumber() % 3;
  return operators[index];
}

function generateRandomMathExpression() {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  return `${firstNumber} ${generateRandomMathOperator()} ${secondNumber}`;
}

function calcMathExpression(expression) {
  const [
    firstNumber,
    operator,
    secondNumber,
  ] = expression.split(' ');

  switch (operator) {
    case '+': return Number(firstNumber) + Number(secondNumber);
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: return null;
  }
}

export default function calcGame() {
  startGame({
    description: 'What is the result of the expression?',
    questionGenerator: generateRandomMathExpression,
    answerCalculator: (expression) => String(calcMathExpression(expression)),
  });
}
