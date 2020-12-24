import { askUserNameAfterGreeting, askAnswer } from './cli.js';
// не совсем понятно про cli.js, имя которого намекает на функционал взаимодействия с консолью
// в 5м шаге есть ссылка на https://ru.wikipedia.org/wiki/Don’t_repeat_yourself
// Файл cli.js не предназначен для описания логики игр.
// Файлы, (src/cli.js, bin/brain-games.js), оставьте как есть и не смешивайте с остальным кодом.
// получается ученик должен продублировать часть кода в index.js?

// params - object на случай расширения функционала
// с заменой на 2 агрумента согласен
export default function startGame(params) {
  const {
    description,
    generateTask,
  } = params;

  const userName = askUserNameAfterGreeting();

  console.log(description);

  const rounds = 3;
  for (let i = 0; i < rounds; i += 1) {
    const {
      question,
      answer,
    } = generateTask();

    console.log(`Question: ${question}`);

    const userAnswer = askAnswer();

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
}
