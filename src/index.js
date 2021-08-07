const sumTwo = (num1, num2) => num1 + num2;

const sumMany = (...nums) => nums.reduce(sumTwo);

module.exports = {
  sumTwo,
  sumMany,
};
