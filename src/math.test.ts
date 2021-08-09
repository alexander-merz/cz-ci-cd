import { sumTwo, sumMany } from './math'

describe('math', () => {
  it('should sum two numbers', () => expect(sumTwo(1, 2)).toBe(3))
  it('should sum many numbers', () => expect(sumMany(1, 2, 3, 4, 5)).toBe(15))
})
