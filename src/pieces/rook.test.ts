import { canRookMove } from './rook'

describe('Rook', () => {
  describe('canRookMove()', () => {
    test('to return properly', () => {
      expect(canRookMove('c4', 'c8')).toBe(true)
      expect(canRookMove('c4', 'a4')).toBe(true)
      expect(canRookMove('c4', 'g8')).toBe(false)
      expect(canRookMove('c4', 'a1')).toBe(false)
    })
  })
})
