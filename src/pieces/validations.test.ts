import { Board } from '../board/board'
import { hasDiagonalBlockPiece, hasHorizontalBlockPiece, hasVerticalBlockPiece, isDiagonalMove, isMoreThanSingleSquare, isHorizontalMove, isVerticalMove } from './validations'

export const makeBoard = (): Board => new Board()

const verticalMoves = [
  ['d4', 'd2'],
  ['d4', 'd3'],
  ['d4', 'd5'],
  ['d4', 'd6']
]

const horizontalMoves = [
  ['d4', 'b4'],
  ['d4', 'c4'],
  ['d4', 'e4'],
  ['d4', 'f4']
]

const diagonalMoves = [
  ['d4', 'e5'],
  ['d4', 'f6'],
  ['d4', 'e3'],
  ['d4', 'f2'],
  ['d4', 'c3'],
  ['d4', 'b2'],
  ['d4', 'c5'],
  ['d4', 'b6']
]

describe('Validations', () => {
  describe('Moves', () => {
    test('isVerticalMove', () => {
      verticalMoves.forEach(move => expect(isVerticalMove(move[0], move[1])).toBe(true))
      horizontalMoves.forEach(move => expect(isVerticalMove(move[0], move[1])).toBe(false))
      diagonalMoves.forEach(move => expect(isVerticalMove(move[0], move[1])).toBe(false))
    })

    test('isHorizontalMove', () => {
      verticalMoves.forEach(move => expect(isHorizontalMove(move[0], move[1])).toBe(false))
      horizontalMoves.forEach(move => expect(isHorizontalMove(move[0], move[1])).toBe(true))
      diagonalMoves.forEach(move => expect(isHorizontalMove(move[0], move[1])).toBe(false))
    })

    test('isDiagonalMove()', () => {
      verticalMoves.forEach(move => expect(isDiagonalMove(move[0], move[1])).toBe(false))
      horizontalMoves.forEach(move => expect(isDiagonalMove(move[0], move[1])).toBe(false))
      diagonalMoves.forEach(move => expect(isDiagonalMove(move[0], move[1])).toBe(true))
    })
  })

  describe('Move Length', () => {
    test('isMoreThanSingleSquare()', () => {
      expect(isMoreThanSingleSquare(verticalMoves[0][0], verticalMoves[0][1])).toBe(true)
      expect(isMoreThanSingleSquare(verticalMoves[1][0], verticalMoves[1][1])).toBe(false)
      expect(isMoreThanSingleSquare(verticalMoves[2][0], verticalMoves[2][1])).toBe(false)
      expect(isMoreThanSingleSquare(verticalMoves[3][0], verticalMoves[3][1])).toBe(true)

      expect(isMoreThanSingleSquare(horizontalMoves[0][0], horizontalMoves[0][1])).toBe(true)
      expect(isMoreThanSingleSquare(horizontalMoves[1][0], horizontalMoves[1][1])).toBe(false)
      expect(isMoreThanSingleSquare(horizontalMoves[2][0], horizontalMoves[2][1])).toBe(false)
      expect(isMoreThanSingleSquare(horizontalMoves[3][0], horizontalMoves[3][1])).toBe(true)

      expect(isMoreThanSingleSquare(diagonalMoves[0][0], diagonalMoves[0][1])).toBe(false)
      expect(isMoreThanSingleSquare(diagonalMoves[1][0], diagonalMoves[1][1])).toBe(true)
      expect(isMoreThanSingleSquare(diagonalMoves[2][0], diagonalMoves[2][1])).toBe(false)
      expect(isMoreThanSingleSquare(diagonalMoves[3][0], diagonalMoves[3][1])).toBe(true)
      expect(isMoreThanSingleSquare(diagonalMoves[4][0], diagonalMoves[4][1])).toBe(false)
      expect(isMoreThanSingleSquare(diagonalMoves[5][0], diagonalMoves[5][1])).toBe(true)
      expect(isMoreThanSingleSquare(diagonalMoves[6][0], diagonalMoves[6][1])).toBe(false)
      expect(isMoreThanSingleSquare(diagonalMoves[7][0], diagonalMoves[7][1])).toBe(true)
    })
  })

  describe('Blocks', () => {
    describe('hasDiagonalBlockPiece()', () => {
      test('when block piece on next piece', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c3')
        boardSut.setPiece('P', 'd4')
        boardSut.setPiece('b', 'f6')

        expect(hasDiagonalBlockPiece('c3', 'f6', boardSut.board)).toBe(true)
      })

      test('when block piece after next piece', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c3')
        boardSut.setPiece('P', 'e5')
        boardSut.setPiece('b', 'f6')

        expect(hasDiagonalBlockPiece('c3', 'f6', boardSut.board)).toBe(true)
      })

      test('when block piece on next piece and movement is negative', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'f6')
        boardSut.setPiece('P', 'e5')
        boardSut.setPiece('b', 'c3')

        expect(hasDiagonalBlockPiece('f6', 'c3', boardSut.board)).toBe(true)
      })

      test('when block piece after next piece and movement is negative', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'f6')
        boardSut.setPiece('P', 'd4')
        boardSut.setPiece('b', 'c3')

        expect(hasDiagonalBlockPiece('f6', 'c3', boardSut.board)).toBe(true)
      })

      test('when no block piece', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c3')
        boardSut.setPiece('b', 'f6')

        expect(hasDiagonalBlockPiece('c3', 'f6', boardSut.board)).toBe(false)
      })

      test('when no block piece and movement is negative', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'f6')
        boardSut.setPiece('b', 'c3')

        expect(hasDiagonalBlockPiece('f6', 'c3', boardSut.board)).toBe(false)
      })
    })

    describe.only('hasVerticalBlockPiece()', () => {
      test('Should Validate true when block on next piece', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'd3')
        boardSut.setPiece('P', 'd4')
        boardSut.setPiece('b', 'd6')

        expect(hasVerticalBlockPiece('d3', 'd6', boardSut.board)).toBe(true)
      })

      test('Should Validate true when block after next piece', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'd3')
        boardSut.setPiece('P', 'd5')
        boardSut.setPiece('b', 'd6')

        expect(hasVerticalBlockPiece('d3', 'd6', boardSut.board)).toBe(true)
      })

      test('Should Validate true when block on next piece and movement is negative', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'd6')
        boardSut.setPiece('P', 'd5')
        boardSut.setPiece('b', 'd3')

        expect(hasVerticalBlockPiece('d6', 'd3', boardSut.board)).toBe(true)
      })

      test('Should Validate true when block after next piece and movement is negative', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'd6')
        boardSut.setPiece('P', 'd4')
        boardSut.setPiece('b', 'd3')

        expect(hasVerticalBlockPiece('d6', 'd3', boardSut.board)).toBe(true)
      })

      test('Should Validate false when no block piece', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'd3')
        boardSut.setPiece('b', 'd6')

        expect(hasVerticalBlockPiece('d3', 'd6', boardSut.board)).toBe(false)
      })

      test('Should Validate false when no block piece and movement is negative', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'd6')
        boardSut.setPiece('b', 'd3')

        expect(hasVerticalBlockPiece('d6', 'd3', boardSut.board)).toBe(false)
      })
    })

    describe('hasHorizontalBlockPiece()', () => {
      test('Should Validate true when block piece', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c4')
        boardSut.setPiece('P', 'e4')
        boardSut.setPiece('b', 'f4')

        expect(hasHorizontalBlockPiece('c4', 'f4', boardSut.board)).toBe(true)
      })

      test('Should Validate true when block piece and movement is negative', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('b', 'f4')
        boardSut.setPiece('P', 'e4')
        boardSut.setPiece('P', 'c4')

        expect(hasHorizontalBlockPiece('f4', 'c4', boardSut.board)).toBe(true)
      })

      test('Should Validate false when no block piece', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('P', 'c4')
        boardSut.setPiece('b', 'f4')

        expect(hasHorizontalBlockPiece('c4', 'f4', boardSut.board)).toBe(false)
      })

      test('Should Validate false when no block piece and movement is negative', () => {
        const boardSut = makeBoard()

        boardSut.setPiece('b', 'f4')
        boardSut.setPiece('P', 'c4')

        expect(hasHorizontalBlockPiece('f4', 'c4', boardSut.board)).toBe(false)
      })
    })
  })
})
