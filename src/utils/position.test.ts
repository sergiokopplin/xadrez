import { getPositionAxis, fixArrayIndex } from './position'

describe('getPositionAxis()', () => {
  it('should return correctly', () => {
    expect(getPositionAxis('d4')).toEqual([4, 4])
    expect(getPositionAxis('b8')).toEqual([2, 8])
  })
})

describe('fixArrayIndex()', () => {
  it('should return correctly', () => {
    expect(fixArrayIndex(1, 1)).toEqual([0, 0])
    expect(fixArrayIndex(7, 4)).toEqual([6, 3])
  })
})
