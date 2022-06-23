import { Board } from './board'

describe('Board', () => {
  test('Should Create a board', () => {
    expect(new Board()).toBeTruthy()
  })

  test('Should Create a board and populate squares correctly', () => {
    const emptyRow = new Array(8).fill(null)
    const sut = new Board()

    expect(sut.board).toEqual([[], [], emptyRow, emptyRow, emptyRow, emptyRow, [], []])
  })
})
