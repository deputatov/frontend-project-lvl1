
/**
 * Function returns a random integer between the specified values.
 * The value is no lower than min and equal to max.
 */
export const getRandomInt = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export default getRandomInt;
