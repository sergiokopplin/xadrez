import { Queen } from './queen'

const makeSut = (): { sut: Queen } => {
  return {
    sut: new Queen()
  }
}

describe('Queen', () => {
  describe('move()', () => {
    test('to return properly', () => {
      const { sut } = makeSut()

      expect(sut.move('c4', 'c8')).toBe(true)
      expect(sut.move('c4', 'a4')).toBe(true)
      expect(sut.move('c4', 'g8')).toBe(true)
      expect(sut.move('c4', 'a1')).toBe(false)
    })
  })
})
