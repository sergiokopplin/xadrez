export const boardDefault: string[][] = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', '']
]

export class Chess {
  public board: string[][] | null

  constructor (board?: string[][]) {
    this.board = board || boardDefault
  }
}
