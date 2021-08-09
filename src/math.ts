export const sumTwo = (num1: number, num2: number): number => num1 + num2
export const sumMany = (...nums: Array<number>): number => nums.reduce(sumTwo)
