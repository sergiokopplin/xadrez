import produce from 'immer'

import { fixArrayIndex, getPositionAxis, Position } from '../utils'

export const whitePieces = 'rnbqkp'
export const blackPieces = 'RNBQKP'

export const defaultRows = ['rnbqkbnr', 'pppppppp', null, null, null, null, 'PPPPPPPP', 'RNBQKBNR']

export interface Square {
  piece: string
}

export type Color = 'black' | 'white'

export class Board {
  public board: Square[]

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
    const [Y, X] = getPositionAxis(position)
    const [y, x] = fixArrayIndex(Y, X)
    const piece = this.board[y][x]?.piece

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
    const [Y, X] = getPositionAxis(position)
    const [y, x] = fixArrayIndex(Y, X)

    return this.board[y][x]
  }

  public setPiece (piece: string, position: Position): void {
    const [Y, X] = getPositionAxis(position)
    const [y, x] = fixArrayIndex(Y, X)

    if (!piece) {
      this.board = produce(this.board, draft => { draft[y][x] = null })
    } else {
      this.board = produce(this.board, draft => { draft[y][x] = { piece } })
    }
  }
}
