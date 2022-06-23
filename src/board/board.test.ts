import { Board } from './board'

describe('Board', () => {
  it('ensure board creation', () => {
    expect(new Board()).toBeTruthy()
  })

  it('ensure board create and populate squares correctly', () => {
    const sut = new Board()
    expect(sut.board).toMatchSnapshot()
  })
})
