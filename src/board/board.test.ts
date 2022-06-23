import { Board } from './board'

describe('Board', () => {
  test('Should Create a board with correct size', () => {
    const sut = new Board()
    expect(sut.board.length).toEqual(8)
    expect(sut.board[0].length).toEqual(8)
  })

  test('Should Create a board and populate empty spaces Correctly', () => {
    const emptyRow = new Array(8).fill(null)
    const board = new Array(8).fill(emptyRow)

    expect(new Board().board).toEqual(board)
  })
})
