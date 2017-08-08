import {
  lexer
} from '../src/index';

describe('lexer', () => {
  it('tokenize Paper 100', () => {
    const code = 'Paper 100';
    const expected = [
      { type: "word", value: "Paper" },
      { type: "number", value: 100 },
    ];
    expect(code).toBe(expected);
  })

  it('tokenize Line 0 50 100 50', () => {
    const code = 'Line 0 50 100 50';
    const expected = [
      { type: "word", value: "Line" },
      { type: "number", value: 0 },
      { type: "number", value: 50 },
      { type: "number", value: 100 },
      { type: "number", value: 50 },
    ];
    expect(code).toBe(expected);
  })
});
