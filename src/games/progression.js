import playGame from '../index.js';
import { generateRandomNumber } from '../utility.js';

function generateTask() {
  const progressionLength = 10;

  const step = generateRandomNumber(1);
  const firstNumber = generateRandomNumber();
  const hiddenIndex = generateRandomNumber() % progressionLength;

  const progression = Array(progressionLength)
    .fill()
    .map((item, index) => firstNumber + step * index);

  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return {
    question: progression.join(' '),
    answer: String(answer),
  };
}

export default function progressionGame() {
  playGame({
    description: 'What number is missing in the progression?',
    generateTask,
  });
}
