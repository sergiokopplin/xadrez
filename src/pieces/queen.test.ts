import { Board } from '../board/board'
import { Queen } from './queen'

const makeSut = (): { sut: Queen } => {
  return {
    sut: new Queen()
  }
}

export const makeBoard = (): Board => new Board()

describe('Queen', () => {
  describe('move()', () => {
    test('to return properly', () => {
      const { sut } = makeSut()

      expect(sut.move('c4', 'c8', makeBoard().board)).toBe(true)
      expect(sut.move('c4', 'a4', makeBoard().board)).toBe(true)
      expect(sut.move('c4', 'g8', makeBoard().board)).toBe(true)
      expect(sut.move('c4', 'a1', makeBoard().board)).toBe(false)
    })
  })
})
