import { letterFromTo } from './globals'

export function getPositionAxis (position: string): number[] {
  const [y, x] = position.split('')

  return [letterFromTo[y] - 1, Number.parseInt(x) - 1]
}
