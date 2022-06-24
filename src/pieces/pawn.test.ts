import { Pawn } from './pawn'

const makeSut = (): { sut: Pawn } => {
  return {
    sut: new Pawn()
  }
}

describe('Pawn', () => {
  describe('move()', () => {
    test('to return properly', () => {
      const { sut } = makeSut()

      expect(sut.move('d4', 'd5')).toBe(true)
      expect(sut.move('d4', 'e5')).toBe(true)
      expect(sut.move('d4', 'c5')).toBe(true)
      expect(sut.move('d4', 'f6')).toBe(false)
    })
  })
})
