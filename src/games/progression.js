import startGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function questionGenerator() {
  const progressionLength = 10;

  const step = generateRandomNumber() + 1; // > 0
  const firstNumber = generateRandomNumber();
  const hiddenIndex = generateRandomNumber() % progressionLength;

  const array = [];

  for (let i = 0, acc = firstNumber; i < progressionLength; i++) {
    array.push(acc);
    acc += step;
  }

  const answer = array[hiddenIndex];
  array[hiddenIndex] = '..';

  return {
    question: array.join(' '),
    answer: String(answer),
  };
}

export default function progressionGame() {
  startGame({
    description: 'What number is missing in the progression?',
    questionGenerator,
  });
}
