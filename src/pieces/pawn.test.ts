import { canPawnMove } from './pawn'

describe('Pawn', () => {
  describe('canPawnMove()', () => {
    test('to return properly', () => {
      expect(canPawnMove('d4', 'd5')).toBe(true)
      expect(canPawnMove('d4', 'e5')).toBe(true)
      expect(canPawnMove('d4', 'c5')).toBe(true)
      expect(canPawnMove('d4', 'f6')).toBe(false)
    })
  })
})
