import { King } from './king'

const makeSut = (): { sut: King } => {
  return {
    sut: new King()
  }
}

describe('King', () => {
  describe('move()', () => {
    test('to return properly', () => {
      const { sut } = makeSut()

      expect(sut.move('d4', 'd5')).toBe(true)
      expect(sut.move('d4', 'e4')).toBe(true)
      expect(sut.move('d4', 'e5')).toBe(true)
      expect(sut.move('d4', 'd6')).toBe(false)
      expect(sut.move('d4', 'f4')).toBe(false)
      expect(sut.move('d4', 'f6')).toBe(false)
      expect(sut.move('d4', 'e2')).toBe(false)
    })
  })
})
