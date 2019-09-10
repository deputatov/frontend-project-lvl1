
/**
 * Function returns a random integer between the specified values.
 * The value is no lower than min (or the next integer greater than min if min isn't an integer),
 * and is less than (but not equal to) max.
 */
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = (num) => num % 2 === 0;

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
