import { Square } from '../board/board'
import { fixArrayIndex, getPositionAxis, Position } from '../utils'

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

export function hasDiagonalBlockPiece (current: string, next: string, board: Square[]): boolean {
  const [cy] = getPositionAxis(current)
  const [ny] = getPositionAxis(next)
  const [CY, NY] = fixArrayIndex(cy, ny)

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

export function hasVerticalBlockPiece (current: string, next: string, board: Square[]): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)
  const [CY, CX] = fixArrayIndex(cy, cx)
  const [, NX] = fixArrayIndex(ny, nx)

  if (CX < NX) {
    for (let index = CX + 1; index < NX; index++) {
      if (board[CY][index]) {
        return true
      }
    }
  }

  if (CX > NX) {
    for (let index = CX - 1; index > NX; index--) {
      if (board[CY][index]) {
        return true
      }
    }
  }

  return false
}

export function hasHorizontalBlockPiece (current: string, next: string, board: Square[]): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)
  const [NY] = fixArrayIndex(ny, nx)
  const [CY, CX] = fixArrayIndex(cy, cx)

  if (CY < NY) {
    for (let index = CY + 1; index < NY; index++) {
      if (board[index][CX]) {
        return true
      }
    }
  }

  if (CY > NY) {
    for (let index = CY - 1; index > NY; index--) {
      if (board[index][CX]) {
        return true
      }
    }
  }

  return false
}
