import startGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function generateRandomMathOperator() {
  const operators = ['+', '-', '*'];
  const index = generateRandomNumber() % operators.length;
  return operators[index];
}

function calcMathExpression(firstNumber, operator, secondNumber) {
  switch (operator) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default: return null;
  }
}

function generateRandomMathExpression() {
  const firstNumber = generateRandomNumber();
  const secondNumber = generateRandomNumber();
  const operator = generateRandomMathOperator();

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calcMathExpression(firstNumber, operator, secondNumber);

  return {
    question,
    answer: String(answer),
  };
}

export default function calcGame() {
  startGame({
    description: 'What is the result of the expression?',
    generateTask: generateRandomMathExpression,
  });
}
