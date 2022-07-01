import { Board } from '../board/board'
import { Rook } from './rook'

const makeSut = (): { sut: Rook } => {
  return {
    sut: new Rook()
  }
}

export const makeBoard = (): Board => new Board()

describe('Rook', () => {
  describe('move()', () => {
    test('to return properly', () => {
      const { sut } = makeSut()

      expect(sut.move('c4', 'c6', makeBoard().board)).toBe(true)
      expect(sut.move('c6', 'c4', makeBoard().board)).toBe(true)
      expect(sut.move('c4', 'f4', makeBoard().board)).toBe(true)
      expect(sut.move('f4', 'c4', makeBoard().board)).toBe(true)
      expect(sut.move('c4', 'e6', makeBoard().board)).toBe(false)
      expect(sut.move('c4', 'a1', makeBoard().board)).toBe(false)
    })
  })
})
