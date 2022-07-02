import produce from 'immer'
import { makePiece } from '../pieces/factories'

import { Color, defaultRows, getPositionAxis, Position, Square, whitePieces } from '../utils'

export class Board {
  public board: Square[][]

  constructor () {
    this.board = this.populateBoard()
  }

  private populateBoard (): Square[][] {
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

  public printBoard (): string {
    let boardPrint = ''
    const reverseBoard = [].concat(this.board).reverse()

    reverseBoard.forEach(row => {
      boardPrint += row.map(item => item?.piece ? item.piece : '.').join('')
      boardPrint += '\n'
    })

    return boardPrint
  }

  public inferPieceColor (position: Position): Color {
    const [y, x] = getPositionAxis(position)
    const piece = this.board[x][y]?.piece

    if (!piece) return null

    return whitePieces.includes(piece) ? 'white' : 'black'
  }

  public isOpponent (ourPosition: Position, theirPosition: Position): boolean {
    const ourColor = this.inferPieceColor(ourPosition)
    const theirColor = this.inferPieceColor(theirPosition)

    if (!ourColor || !theirColor) {
      return false
    }

    return ourColor !== theirColor
  }

  public getSquare (position: Position): Square {
    const [y, x] = getPositionAxis(position)

    return this.board[x][y]
  }

  public setPiece (piece: string, position: Position): void {
    const [y, x] = getPositionAxis(position)

    if (!piece) {
      this.board = produce(this.board, draft => { draft[x][y] = null })
    } else {
      this.board = produce(this.board, draft => { draft[x][y] = { piece } })
    }
  }

  public isEmptySquare (position: Position): boolean {
    return !this.getSquare(position)
  }

  public move (current: Position, next: Position): void {
    const currentSquare = this.getSquare(current)
    const currentPiece = makePiece(currentSquare.piece)

    if ((this.isEmptySquare(next) || this.isOpponent(current, next)) && currentPiece.move(current, next, this.board)) {
      this.setPiece(null, current)
      this.setPiece(currentSquare.piece, next)
    }
  }
}
