
/**
 * Function returns a random integer between the specified values.
 * The value is no lower than min and equal to max.
 */
export default (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
