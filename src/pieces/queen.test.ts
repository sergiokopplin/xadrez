import { canQueenMove } from './queen'

describe('Queen', () => {
  describe('canQueenMove()', () => {
    test('to return properly', () => {
      expect(canQueenMove('c4', 'c8')).toBe(true)
      expect(canQueenMove('c4', 'a4')).toBe(true)
      expect(canQueenMove('c4', 'g8')).toBe(true)
      expect(canQueenMove('c4', 'a1')).toBe(false)
    })
  })
})
