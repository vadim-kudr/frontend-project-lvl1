import readlineSync from 'readline-sync';

export function askUserName() {
  return readlineSync.question('May I have your name? ');
}