// обычно utility содержит множество функций
/* eslint-disable import/prefer-default-export */
export function generateRandomNumber(min = 0, max = 15) {
  // ответ включает min и max
  return Math.floor(Math.random() * (max - min + 1) + min);
}
