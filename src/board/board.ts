export const defaultRows = ['rnbqkbnr', 'pppppppp', null, null, null, null, 'PPPPPPPP', 'RNBQKBNR']

export class Board {
  public readonly board: string[]

  constructor () {
    this.board = this.populateBoard()
  }

  private populateBoard () {
    const board = new Array(8).fill([])
    const emptyRow = new Array(8).fill(null)

    defaultRows.forEach((item, index) => { board[index] = item || emptyRow })

    return board
  }
}
