import { Bishop } from './bishop'
import { King } from './king'
import { Knight } from './knight'
import { Pawn } from './pawn'
import { Piece } from './piece'
import { Queen } from './queen'
import { Rook } from './rook'

const PiecesFromTo = {
  r: new Rook(),
  n: new Knight(),
  b: new Bishop(),
  q: new Queen(),
  k: new King(),
  p: new Pawn(),
  R: new Rook(),
  N: new Knight(),
  B: new Bishop(),
  Q: new Queen(),
  K: new King(),
  P: new Pawn()
}

export const makePiece = (piece: string): Piece => {
  return PiecesFromTo[piece]
}
