import { canKingMove } from './king'

describe('King', () => {
  describe('canKingMove()', () => {
    test('to return properly', () => {
      expect(canKingMove('d4', 'd5')).toBe(true)
      expect(canKingMove('d4', 'e4')).toBe(true)
      expect(canKingMove('d4', 'e5')).toBe(true)
      expect(canKingMove('d4', 'd6')).toBe(false)
      expect(canKingMove('d4', 'f4')).toBe(false)
      expect(canKingMove('d4', 'f6')).toBe(false)
      expect(canKingMove('d4', 'e2')).toBe(false)
    })
  })
})
