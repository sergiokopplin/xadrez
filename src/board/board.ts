export class Board {
  public readonly board: string[]

  constructor () {
    this.board = new Array(8).fill(new Array(8).fill(null))
  }
}
