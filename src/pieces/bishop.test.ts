import { Board } from '../board/board'
import { Bishop } from './bishop'

const makeSut = (): { sut: Bishop } => {
  return {
    sut: new Bishop()
  }
}

export const makeBoard = (): Board => {
  return new Board()
}

describe('Bishop', () => {
  describe('hasBlockPiece()', () => {
    it('should return false when single level move', () => {
      const { sut } = makeSut()
      const board = makeBoard()

      board.setPiece('b', 'd4')
      board.setPiece('P', 'e5')

      expect(sut.hasBlockPiece('d4', 'e5', board)).toBe(false)
    })
  })

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
