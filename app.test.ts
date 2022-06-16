import { Chess } from './app'

describe('Chess', () => {
  test('Should construct ok', () => {
    const makeGame = new Chess()

    expect(makeGame).toBeTruthy()
    expect(makeGame.board).toBeTruthy()
  })

  test('Should return board on get', () => {
    const makeGame = new Chess()

    expect(makeGame.getBoard()).toBeTruthy()
  })
})
