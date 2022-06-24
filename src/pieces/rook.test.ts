import { Rook } from './rook'

const makeSut = (): { sut: Rook } => {
  return {
    sut: new Rook()
  }
}

describe('Rook', () => {
  describe('move()', () => {
    test('to return properly', () => {
      const { sut } = makeSut()

      expect(sut.move('c4', 'c8')).toBe(true)
      expect(sut.move('c4', 'a4')).toBe(true)
      expect(sut.move('c4', 'g8')).toBe(false)
      expect(sut.move('c4', 'a1')).toBe(false)
    })
  })
})
