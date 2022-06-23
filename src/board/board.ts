export class Board {
  public readonly board: string[]

  constructor () {
    this.board = this.populateBoard()
  }

  private populateBoard () {
    return new Array(8).fill(new Array(8).fill(null))
  }
}
