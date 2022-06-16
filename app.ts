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

  isOutOfLimits (position: Position): boolean {
    if (position.y >= 4 || position.x >= 4) {
      return true
    }

    return false
  }

  hasSameColorPieceOnPosition (position: Position, color: Color): boolean {
    if (!this.isEmptyPosition(position)) {
      if (this.board[position.y][position.x].color === color) {
        return true
      }
    }

    return false
  }

  isEmptyPosition (position: Position): boolean {
    return this.board[position.y][position.x] === ''
  }

  put (piece: Piece, position: Position, color: Color) {
    if (this.isOutOfLimits(position)) {
      throw new Error('isOutOfLimits')
    }

    if (this.hasSameColorPieceOnPosition(position, color)) {
      throw new Error('hasSameColorPieceOnPosition')
    }

    this.board[position.y][position.x] = { piece, color }
  }
}
