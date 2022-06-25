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
      const boardSut = makeBoard()

      boardSut.setPiece('b', 'd4')
      boardSut.setPiece('P', 'e5')

      expect(sut.hasBlockPiece('d4', 'e5', boardSut.board)).toBe(false)
    })

    describe('should return false when', () => {
      it('no single piece in the way and increase right diagonal', () => {
        const { sut } = makeSut()
        const boardSut = makeBoard()

        boardSut.setPiece('b', 'c3')
        boardSut.setPiece('P', 'f6')

        expect(sut.hasBlockPiece('c3', 'f6', boardSut.board)).toBe(false)
      })

      it('no single piece in the way and decrease right diagonal', () => {
        const { sut } = makeSut()
        const boardSut = makeBoard()

        boardSut.setPiece('b', 'c6')
        boardSut.setPiece('P', 'f3')

        expect(sut.hasBlockPiece('c6', 'f3', boardSut.board)).toBe(false)
      })

      it('no single piece in the way and increase left diagonal', () => {
        const { sut } = makeSut()
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c6')
        boardSut.setPiece('b', 'f3')

        expect(sut.hasBlockPiece('f3', 'c6', boardSut.board)).toBe(false)
      })

      it('no single piece in the way and decrease left diagonal', () => {
        const { sut } = makeSut()
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c3')
        boardSut.setPiece('b', 'f6')

        expect(sut.hasBlockPiece('f6', 'c3', boardSut.board)).toBe(false)
      })
    })

    describe('should return true when', () => {
      it('pieces in the way and increase right diagonal', () => {
        const { sut } = makeSut()
        const boardSut = makeBoard()

        boardSut.setPiece('b', 'c3')
        boardSut.setPiece('b', 'e5')
        boardSut.setPiece('P', 'f6')

        expect(sut.hasBlockPiece('c3', 'f6', boardSut.board)).toBe(false)
      })

      it('pieces in the way and decrease right diagonal', () => {
        const { sut } = makeSut()
        const boardSut = makeBoard()

        boardSut.setPiece('b', 'c6')
        boardSut.setPiece('b', 'e4')
        boardSut.setPiece('P', 'f3')

        expect(sut.hasBlockPiece('c6', 'f3', boardSut.board)).toBe(false)
      })

      it('pieces in the way and increase left diagonal', () => {
        const { sut } = makeSut()
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c6')
        boardSut.setPiece('P', 'd5')
        boardSut.setPiece('b', 'f3')

        expect(sut.hasBlockPiece('f3', 'c6', boardSut.board)).toBe(false)
      })

      it('pieces in the way and decrease left diagonal', () => {
        const { sut } = makeSut()
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c3')
        boardSut.setPiece('P', 'd4')
        boardSut.setPiece('b', 'f6')

        expect(sut.hasBlockPiece('f6', 'c3', boardSut.board)).toBe(false)
      })
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
