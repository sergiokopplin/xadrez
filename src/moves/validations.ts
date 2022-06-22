/* eslint-disable @typescript-eslint/no-unused-vars */

import { getPositionAxis, Position } from '../utils'

export function isYAxisMove (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (cy !== ny) {
    return false
  }

  return true
}

export function isXAxisMove (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (cx !== nx) {
    return false
  }

  return true
}

export function isDiagonalMove (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (isYAxisMove(current, next) || isXAxisMove(current, next)) {
    return false
  }

  const equality = Math.abs(cy - cx) === Math.abs(ny - nx)
  const modulus = Math.abs(cy - cx) - Math.abs(ny - nx) % 2 === 0

  if (!equality && !modulus) {
    return false
  }

  return true
}

export function isMoreThanSingleSquare (current: Position, next: Position): boolean {
  const [cy, cx] = getPositionAxis(current)
  const [ny, nx] = getPositionAxis(next)

  if (isYAxisMove(current, next)) {
    if (Math.abs(cx - nx) > 1) {
      return true
    }
  }

  if (isXAxisMove(current, next)) {
    if (Math.abs(cy - ny) > 1) {
      return true
    }
  }

  if (isDiagonalMove(current, next)) {
    if (Math.abs(cy - ny) > 1 || Math.abs(cx - nx) > 1) {
      return true
    }
  }

  return false
}
