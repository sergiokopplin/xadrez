type Piece = string
type Color = 'white' | 'black'
type Board = { piece: Piece, color: Color } | string[][]
interface Position {
  y: number
  x: number
}

export const boardDefault: Board = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', '']
]

export class Chess {
  public board: Board

  constructor (board?: Board) {
    this.board = board || boardDefault
  }

  put (piece: Piece, position: Position, color: Color) {
    if (position.y >= 4 || position.x >= 4) {
      throw new Error()
    }

    this.board[position.y][position.x] = { piece, color }
  }
}
