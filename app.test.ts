import { Chess } from './app'

describe('Chess', () => {
  test('Should construct ok', () => {
    const makeGame = new Chess()
    expect(makeGame).toBeTruthy()
  })
})
