import { getPositionAxis } from './position'

describe('getPositionAxis()', () => {
  it('should return correctly', () => {
    expect(getPositionAxis('d4')).toEqual([3, 3])
    expect(getPositionAxis('b8')).toEqual([1, 7])
  })
})
