export const sumTwo = (num1, num2) => num1 + num2;
export const sumMany = (...nums) => nums.reduce(sumTwo);
