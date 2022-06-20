import { canPawnMove } from './pawn'

describe('Pawn', () => {
  describe('canPawnMove()', () => {
    test('to return properly', () => {
      expect(canPawnMove('d4', 'd5')).toBe(true)
      expect(canPawnMove('d4', 'e4')).toBe(true)
      expect(canPawnMove('d4', 'e5')).toBe(true)
      expect(canPawnMove('d4', 'd6')).toBe(false)
      expect(canPawnMove('d4', 'f4')).toBe(false)
      expect(canPawnMove('d4', 'f6')).toBe(false)
      expect(canPawnMove('d4', 'e2')).toBe(false)
    })
  })
})
