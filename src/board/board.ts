export const defaultRows = ['rnbqkbnr', 'pppppppp', null, null, null, null, 'PPPPPPPP', 'RNBQKBNR']

export class Board {
  public readonly board: string[]

  constructor () {
    this.board = this.populateBoard()
  }

  private populateBoard (): string[] {
    const board = new Array(8).fill([])
    const emptyRow = new Array(8).fill(null)

    defaultRows.forEach((item, rowIndex) => {
      if (!item) {
        board[rowIndex] = emptyRow
        return
      }

      board[rowIndex] = item.split('').map(piece => ({
        piece
      }))
    })

    return board
  }
}
