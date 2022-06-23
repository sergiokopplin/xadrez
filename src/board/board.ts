export class Board {
  public readonly board: string[]

  constructor () {
    this.board = this.populateBoard()
  }

  private populateBoard () {
    const board = new Array(8).fill([])
    const emptyRow = new Array(8).fill(null)
    const emptyRows = [2, 3, 4, 5]

    emptyRows.forEach(row => { board[row] = emptyRow })

    return board
  }
}
