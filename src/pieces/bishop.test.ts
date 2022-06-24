import { Bishop } from './bishop'

const makeSut = (): { sut: Bishop } => {
  return {
    sut: new Bishop()
  }
}

describe('Bishop', () => {
  describe('move()', () => {
    test('to return properly', () => {
      const { sut } = makeSut()

      expect(sut.move('c4', 'c8')).toBe(false)
      expect(sut.move('c4', 'a4')).toBe(false)
      expect(sut.move('c4', 'g8')).toBe(true)
      expect(sut.move('c4', 'a1')).toBe(false)
    })
  })
})
