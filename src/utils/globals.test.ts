import { letterFromTo, blackPieces, defaultRows, whitePieces } from './globals';

describe('globals', () => {
  test('should return properly', () => {
    expect(letterFromTo).toMatchSnapshot();
    expect(blackPieces).toMatchSnapshot();
    expect(defaultRows).toMatchSnapshot();
    expect(whitePieces).toMatchSnapshot();
  });
});
