import { getPositionAxis, Position } from '../utils'

export const defaultRows = ['rnbqkbnr', 'pppppppp', null, null, null, null, 'PPPPPPPP', 'RNBQKBNR']

export interface Square {
  piece: string
}

export type Color = 'black' | 'white'

export class Board {
  public readonly board: Square[]

  constructor () {
    this.board = this.populateBoard()
  }

  private populateBoard (): Square[] {
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

  public inferPieceColor (position: Position): Color {
    const [y, x] = getPositionAxis(position)
    const piece = this.board[y][x].piece

    if (!piece) return null
  }

  public getSquare (position: Position): Square {
    const [y, x] = getPositionAxis(position)

    return this.board[y][x]
  }
}
