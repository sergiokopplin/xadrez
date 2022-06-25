/* eslint-disable @typescript-eslint/no-unused-vars */

import { Square } from '../board/board'
import { fixArrayIndex, getPositionAxis, Position } from '../utils'

export function isYAxisMove (current: Position, next: Position): boolean {
  const [cy] = getPositionAxis(current)
  const [ny] = getPositionAxis(next)

  return cy === ny
}

export function isXAxisMove (current: Position, next: Position): boolean {
  const [, cx] = getPositionAxis(current)
  const [, nx] = getPositionAxis(next)

  return cx === nx
}

export function isDiagonalMove (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (isYAxisMove(current, next) || isXAxisMove(current, next)) {
    return false
  }

  const equality = Math.abs(cy - cx) === Math.abs(ny - nx)
  const modulus = Math.abs(cy - cx) - Math.abs(ny - nx) % 2 === 0

  return !(!equality && !modulus)
}

export function isMoreThanSingleSquare (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (isYAxisMove(current, next) && (Math.abs(cx - nx) > 1)) {
    return true
  }

  if (isXAxisMove(current, next) && (Math.abs(cy - ny) > 1)) {
    return true
  }

  return !!(isDiagonalMove(current, next) && (Math.abs(cy - ny) > 1 || Math.abs(cx - nx) > 1))
}

export function hasBlockPieceOnDiagonal (current: string, next: string, board: Square[]): boolean {
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

export function hasBlockPieceOnYAxis (current: string, next: string, board: Square[]): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)
  const [, CX] = fixArrayIndex(cy, cx)
  const [, NX] = fixArrayIndex(ny, nx)

  if (CX < NX) {
    for (let index = CX + 1; index < NX; index++) {
      if (board[index][cy]) {
        return true
      }
    }
  }

  if (CX > NX) {
    for (let index = CX - 1; index > NX; index--) {
      if (board[index][cy]) {
        return true
      }
    }
  }

  return false
}

export function hasBlockPieceOnXAxis (current: string, next: string, board: Square[]): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)
  const [CY] = fixArrayIndex(cy, cx)
  const [NY] = fixArrayIndex(ny, nx)

  if (CY < NY) {
    for (let index = CY + 1; index < NY; index++) {
      if (board[cx][index]) {
        return true
      }
    }
  }

  if (CY > NY) {
    for (let index = CY - 1; index > NY; index--) {
      if (board[cx][index]) {
        return true
      }
    }
  }

  return false
}
