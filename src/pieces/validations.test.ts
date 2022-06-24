import { isDiagonalMove, isMoreThanSingleSquare, isXAxisMove, isYAxisMove } from './validations'

describe('Validations', () => {
  describe('isYAxisMove', () => {
    test('Should Validate', () => {
      expect(isYAxisMove('d4', 'd5')).toBe(true)
      expect(isYAxisMove('d4', 'd6')).toBe(true)
      expect(isYAxisMove('d4', 'e4')).toBe(false)
      expect(isYAxisMove('d4', 'f4')).toBe(false)
      expect(isYAxisMove('d4', 'e5')).toBe(false)
      expect(isYAxisMove('d4', 'f6')).toBe(false)
    })
  })

  describe('isXAxisMove', () => {
    test('Should Validate', () => {
      expect(isXAxisMove('d4', 'd5')).toBe(false)
      expect(isXAxisMove('d4', 'd6')).toBe(false)
      expect(isXAxisMove('d4', 'e4')).toBe(true)
      expect(isXAxisMove('d4', 'f4')).toBe(true)
      expect(isXAxisMove('d4', 'e5')).toBe(false)
      expect(isXAxisMove('d4', 'f6')).toBe(false)
    })
  })

  describe('isDiagonalMove()', () => {
    test('Should Validate', () => {
      expect(isDiagonalMove('d4', 'd5')).toBe(false)
      expect(isDiagonalMove('d4', 'd6')).toBe(false)
      expect(isDiagonalMove('d4', 'e4')).toBe(false)
      expect(isDiagonalMove('d4', 'f4')).toBe(false)
      expect(isDiagonalMove('d4', 'e5')).toBe(true)
      expect(isDiagonalMove('d4', 'f6')).toBe(true)
    })
  })

  describe('isMoreThanSingleSquare()', () => {
    test('Should Validate', () => {
      expect(isMoreThanSingleSquare('d4', 'd5')).toBe(false)
      expect(isMoreThanSingleSquare('d4', 'd6')).toBe(true)
      expect(isMoreThanSingleSquare('d4', 'e4')).toBe(false)
      expect(isMoreThanSingleSquare('d4', 'f4')).toBe(true)
      expect(isMoreThanSingleSquare('d4', 'e5')).toBe(false)
      expect(isMoreThanSingleSquare('d4', 'f6')).toBe(true)
    })
  })
})