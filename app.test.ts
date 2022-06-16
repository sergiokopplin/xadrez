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
})
