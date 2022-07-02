import { getPositionAxis, Position, Square } from '../utils'

export function isVerticalMove (current: Position, next: Position): boolean {
  const [cy] = getPositionAxis(current)
  const [ny] = getPositionAxis(next)

  return cy === ny
}

export function isHorizontalMove (current: Position, next: Position): boolean {
  const [, cx] = getPositionAxis(current)
  const [, nx] = getPositionAxis(next)

  return cx === nx
}

export function isDiagonalMove (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (isVerticalMove(current, next) || isHorizontalMove(current, next)) {
    return false
  }

  const equality = Math.abs(cy - cx) === Math.abs(ny - nx)
  const modulus = Math.abs(cy - cx) - Math.abs(ny - nx) % 2 === 0

  return !(!equality && !modulus)
}

export function isMoreThanSingleSquare (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (isVerticalMove(current, next) && (Math.abs(cx - nx) > 1)) {
    return true
  }

  if (isHorizontalMove(current, next) && (Math.abs(cy - ny) > 1)) {
    return true
  }

  return !!(isDiagonalMove(current, next) && (Math.abs(cy - ny) > 1 || Math.abs(cx - nx) > 1))
}

export function hasDiagonalBlockPiece (current: string, next: string, board: Square[][]): boolean {
  const [CY] = getPositionAxis(current)
  const [NY] = getPositionAxis(next)

  if (CY < NY) {
    for (let index = CY + 1; index < NY; index++) {
      if (board[index][index]) {
        return true
      }
    }
  }

  if (CY > NY) {
    for (let index = CY - 1; index > NY; index--) {
      if (board[index][index]) {
        return true
      }
    }
  }

  return false
}

export function hasVerticalBlockPiece (current: string, next: string, board: Square[][]): boolean {
  const [CY, CX] = getPositionAxis(current)
  const [, NX] = getPositionAxis(next)

  if (CX < NX) {
    for (let index = CX + 1; index < NX; index++) {
      if (board[index][CY]) {
        return true
      }
    }
  }

  if (CX > NX) {
    for (let index = CX - 1; index > NX; index--) {
      if (board[index][CY]) {
        return true
      }
    }
  }

  return false
}

export function hasHorizontalBlockPiece (current: string, next: string, board: Square[][]): boolean {
  const [CY, CX] = getPositionAxis(current)
  const [NY] = getPositionAxis(next)

  if (CY < NY) {
    for (let index = CY + 1; index < NY; index++) {
      if (board[CX][index]) {
        return true
      }
    }
  }

  if (CY > NY) {
    for (let index = CY - 1; index > NY; index--) {
      if (board[CX][index]) {
        return true
      }
    }
  }

  return false
}
