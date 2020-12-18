import readlineSync from 'readline-sync';

export function printWelcomeMessage() {
  console.log('Welcome to the Brain Games!');
}

export function askUserName() {
  return readlineSync.question('May I have your name? ');
}

export function askUserNameAfterGreeting() {
  printWelcomeMessage();
  const name = askUserName();
  console.log(`Hello, ${name}!`);
  return name;
}

export function askAnswer() {
  return readlineSync.question('Your answer: ');
}
