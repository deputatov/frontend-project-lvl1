
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
