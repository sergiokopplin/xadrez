import { Board } from '../board/board'
import { hasBlockPieceOnDiagonal, hasBlockPieceOnXAxis, hasBlockPieceOnYAxis, isDiagonalMove, isMoreThanSingleSquare, isXAxisMove, isYAxisMove } from './validations'

export const makeBoard = (): Board => new Board()

describe('Validations', () => {
  test('isYAxisMove', () => {
    // vertical
    expect(isYAxisMove('d4', 'd2')).toBe(true)
    expect(isYAxisMove('d4', 'd3')).toBe(true)
    expect(isYAxisMove('d4', 'd5')).toBe(true)
    expect(isYAxisMove('d4', 'd6')).toBe(true)
    // horizontal
    expect(isYAxisMove('d4', 'b4')).toBe(false)
    expect(isYAxisMove('d4', 'c4')).toBe(false)
    expect(isYAxisMove('d4', 'e4')).toBe(false)
    expect(isYAxisMove('d4', 'f4')).toBe(false)
    // diagonal
    expect(isYAxisMove('d4', 'e5')).toBe(false)
    expect(isYAxisMove('d4', 'f6')).toBe(false)
    expect(isYAxisMove('d4', 'e3')).toBe(false)
    expect(isYAxisMove('d4', 'f2')).toBe(false)
    expect(isYAxisMove('d4', 'c3')).toBe(false)
    expect(isYAxisMove('d4', 'b2')).toBe(false)
    expect(isYAxisMove('d4', 'c5')).toBe(false)
    expect(isYAxisMove('d4', 'b6')).toBe(false)
  })

  test('isXAxisMove', () => {
    // vertical
    expect(isXAxisMove('d4', 'd2')).toBe(false)
    expect(isXAxisMove('d4', 'd3')).toBe(false)
    expect(isXAxisMove('d4', 'd5')).toBe(false)
    expect(isXAxisMove('d4', 'd6')).toBe(false)
    // horizontal
    expect(isXAxisMove('d4', 'b4')).toBe(true)
    expect(isXAxisMove('d4', 'c4')).toBe(true)
    expect(isXAxisMove('d4', 'e4')).toBe(true)
    expect(isXAxisMove('d4', 'f4')).toBe(true)
    // diagonal
    expect(isXAxisMove('d4', 'e5')).toBe(false)
    expect(isXAxisMove('d4', 'f6')).toBe(false)
    expect(isXAxisMove('d4', 'e3')).toBe(false)
    expect(isXAxisMove('d4', 'f2')).toBe(false)
    expect(isXAxisMove('d4', 'c3')).toBe(false)
    expect(isXAxisMove('d4', 'b2')).toBe(false)
    expect(isXAxisMove('d4', 'c5')).toBe(false)
    expect(isXAxisMove('d4', 'b6')).toBe(false)
  })

  test('isDiagonalMove()', () => {
    // vertical
    expect(isDiagonalMove('d4', 'd2')).toBe(false)
    expect(isDiagonalMove('d4', 'd3')).toBe(false)
    expect(isDiagonalMove('d4', 'd5')).toBe(false)
    expect(isDiagonalMove('d4', 'd6')).toBe(false)
    // horizontal
    expect(isDiagonalMove('d4', 'b4')).toBe(false)
    expect(isDiagonalMove('d4', 'c4')).toBe(false)
    expect(isDiagonalMove('d4', 'e4')).toBe(false)
    expect(isDiagonalMove('d4', 'f4')).toBe(false)
    // diagonal
    expect(isDiagonalMove('d4', 'e5')).toBe(true)
    expect(isDiagonalMove('d4', 'f6')).toBe(true)
    expect(isDiagonalMove('d4', 'e3')).toBe(true)
    expect(isDiagonalMove('d4', 'f2')).toBe(true)
    expect(isDiagonalMove('d4', 'c3')).toBe(true)
    expect(isDiagonalMove('d4', 'b2')).toBe(true)
    expect(isDiagonalMove('d4', 'c5')).toBe(true)
    expect(isDiagonalMove('d4', 'b6')).toBe(true)
  })

  test.skip('isMoreThanSingleSquare()', () => {
    expect(isMoreThanSingleSquare('d4', 'd5')).toBe(false)
    expect(isMoreThanSingleSquare('d4', 'd6')).toBe(true)
    expect(isMoreThanSingleSquare('d4', 'e4')).toBe(false)
    expect(isMoreThanSingleSquare('d4', 'f4')).toBe(true)
    expect(isMoreThanSingleSquare('d4', 'e5')).toBe(false)
    expect(isMoreThanSingleSquare('d4', 'f6')).toBe(true)
  })

  test.skip('hasBlockPieceOnDiagonal()', () => {
    test('when block piece', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'c3')
      boardSut.setPiece('P', 'd4')
      boardSut.setPiece('b', 'f6')

      expect(hasBlockPieceOnDiagonal('c3', 'f6', boardSut.board)).toBe(true)
    })

    test('when block piece and movement is negative', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'f6')
      boardSut.setPiece('P', 'd4')
      boardSut.setPiece('b', 'c3')

      expect(hasBlockPieceOnDiagonal('f6', 'c3', boardSut.board)).toBe(true)
    })

    test('when no block piece', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'c3')
      boardSut.setPiece('b', 'f6')

      expect(hasBlockPieceOnDiagonal('c3', 'f6', boardSut.board)).toBe(false)
    })

    test('when no block piece and movement is negative', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'f6')
      boardSut.setPiece('b', 'c3')

      expect(hasBlockPieceOnDiagonal('f6', 'c3', boardSut.board)).toBe(false)
    })
  })

  test.skip('hasBlockPieceOnYAxis()', () => {
    test('Should Validate true when block piece', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'd3')
      boardSut.setPiece('P', 'd5')
      boardSut.setPiece('b', 'd6')

      expect(hasBlockPieceOnYAxis('d3', 'd6', boardSut.board)).toBe(true)
    })

    test('Should Validate true when block piece and movement is negative', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'd6')
      boardSut.setPiece('P', 'd5')
      boardSut.setPiece('b', 'd3')

      expect(hasBlockPieceOnYAxis('d6', 'd3', boardSut.board)).toBe(true)
    })

    test('Should Validate false when no block piece', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'd3')
      boardSut.setPiece('b', 'd6')

      expect(hasBlockPieceOnYAxis('d3', 'd6', boardSut.board)).toBe(false)
    })

    test('Should Validate false when no block piece and movement is negative', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'd6')
      boardSut.setPiece('b', 'd3')

      expect(hasBlockPieceOnYAxis('d6', 'd3', boardSut.board)).toBe(false)
    })
  })

  test.skip('hasBlockPieceOnXAxis()', () => {
    test('Should Validate true when block piece', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'c4')
      boardSut.setPiece('P', 'e4')
      boardSut.setPiece('b', 'f4')

      expect(hasBlockPieceOnXAxis('c4', 'f4', boardSut.board)).toBe(true)
    })

    test('Should Validate true when block piece and movement is negative', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('b', 'f4')
      boardSut.setPiece('P', 'e4')
      boardSut.setPiece('P', 'c4')

      expect(hasBlockPieceOnXAxis('f4', 'c4', boardSut.board)).toBe(true)
    })

    test('Should Validate false when no block piece', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('P', 'c4')
      boardSut.setPiece('b', 'f4')

      expect(hasBlockPieceOnXAxis('c4', 'f4', boardSut.board)).toBe(false)
    })

    test('Should Validate false when no block piece and movement is negative', () => {
      const boardSut = makeBoard()

      boardSut.setPiece('b', 'f4')
      boardSut.setPiece('P', 'c4')

      expect(hasBlockPieceOnXAxis('f4', 'c4', boardSut.board)).toBe(false)
    })
  })
})
