import { Chess } from './app'

const makeBoard = (board?: string[][]): Chess => {
  const boardParam = board

  return new Chess(boardParam)
}

describe('Chess', () => {
  test('Should construct and init properly with no custom board', () => {
    const chess = makeBoard()

    expect(chess.board).toEqual([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']])
  })

  test('Should construct and init properly with custom board', () => {
    const chess = makeBoard([['x', '', '', ''], ['', 'x', '', ''], ['', '', 'x', ''], ['', '', '', 'x']])

    expect(chess.board).toEqual([['x', '', '', ''], ['', 'x', '', ''], ['', '', 'x', ''], ['', '', '', 'x']])
  })

  test('Should put correctly', () => {
    const chess = makeBoard()

    chess.put('x', { y: 3, x: 2 }, 'black')

    expect(chess.board).toEqual([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', { piece: 'x', color: 'black' }, '']])
  })

  test('Should throw when put is out of limit', () => {
    const chess = makeBoard()

    expect(() => chess.put('x', { y: 5, x: 2 }, 'black')).toThrow(new Error('isOutOfLimits'))
  })

  test('Should throw when put is same color', () => {
    const chess = makeBoard()

    chess.put('x', { y: 3, x: 1 }, 'black')
    chess.put('x', { y: 2, x: 2 }, 'black')
    chess.put('x', { y: 1, x: 3 }, 'black')

    expect(() => chess.put('x', { y: 2, x: 2 }, 'black')).toThrow(new Error('hasSameColorPieceOnPosition'))
  })
})
