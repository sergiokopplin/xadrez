import { Chess } from './app'

const makeBoard = (board?: string[][]): Chess => {
  return new Chess(board)
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

  test('Should clear position', () => {
    const chess = makeBoard()

    chess.put('x', { y: 3, x: 2 }, 'black')
    chess.clearPosition({ y: 3, x: 2 })

    expect(chess.board).toEqual([['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']])
  })

  test('Should get Square', () => {
    const chess = makeBoard()

    chess.put('x', { y: 3, x: 2 }, 'black')

    expect(chess.getPosition({ y: 3, x: 2 })).toEqual({ color: 'black', piece: 'x' }
    )
  })

  test('Should clear board', () => {
    const chess = makeBoard()

    chess.put('x', { y: 3, x: 2 }, 'black')
    chess.put('y', { y: 2, x: 3 }, 'black')
    chess.clearBoard()

    expect(chess.board).toEqual([
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', ''],
      ['', '', '', '']
    ])
  })
})
