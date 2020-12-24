import startGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function generateTask() {
  const progressionLength = 10;

  const step = generateRandomNumber(1);
  const firstNumber = generateRandomNumber();
  const hiddenIndex = generateRandomNumber() % progressionLength;

  const numbers = Array(progressionLength)
    .fill()
    .map((item, index) => firstNumber + step * index);

  const answer = numbers[hiddenIndex];
  numbers[hiddenIndex] = '..';

  return {
    question: numbers.join(' '),
    answer: String(answer),
  };
}

export default function progressionGame() {
  startGame({
    description: 'What number is missing in the progression?',
    generateTask,
  });
}
