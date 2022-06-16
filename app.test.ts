import { Chess } from './app'

const makeBoard = (): Chess => {
  return new Chess()
}

describe('Chess', () => {
  test('Should construct ok', () => {
    const chess = makeBoard()

    expect(chess).toBeTruthy()

    expect(chess.getBoard().length).toBe(8)
    expect(chess.getBoard()[0].length).toBe(8)
    expect(chess.getBoard()[0][0]).toBe('')
    expect(chess.getBoard()[0][1]).toBe('')
  })

  test('Should put ok', () => {
    const chess = makeBoard()

    chess.put('p', '12')

    expect(chess.getBoard()[1][2]).toEqual('p')
  })

  test('Should throw on put', () => {
    const chess = makeBoard()

    expect(() => chess.put('Q', '08')).toThrowError('Invalid Put')
    expect(() => chess.put('Q', '08')).toThrowError('Invalid Put')
  })
})
