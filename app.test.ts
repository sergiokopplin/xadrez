import { Chess } from './app'

const makeBoard = (): Chess => {
  return new Chess()
}

describe('Chess', () => {
  test('Should construct ok', () => {
    const chess = makeBoard()

    expect(chess).toBeTruthy()
    expect(chess.board).toBeTruthy()
  })

  test('Should return board on get', () => {
    const chess = makeBoard()
    expect(chess.getBoard()).toBeTruthy()
  })
})
