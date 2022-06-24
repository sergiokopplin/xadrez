import { canBishopMove } from './bishop'

describe('Bishop', () => {
  describe('canBishopMove()', () => {
    test('to return properly', () => {
      expect(canBishopMove('c4', 'c8')).toBe(false)
      expect(canBishopMove('c4', 'a4')).toBe(false)
      expect(canBishopMove('c4', 'g8')).toBe(true)
      expect(canBishopMove('c4', 'a1')).toBe(false)
    })
  })
})
