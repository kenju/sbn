import { lexer } from '../lexer';

describe('lexer()', () => {
  it('tokenize Paper 0', () => {
    const code = 'Paper 0';
    const expected = [
      { type: "word", value: "Paper" },
      { type: "number", value: 0 },
    ];
    expect(lexer(code)).toEqual(expected);
  })

  it('tokenize Pen 100', () => {
    const code = 'Pen 100';
    const expected = [
      { type: "word", value: "Pen" },
      { type: "number", value: 100 },
    ];
    expect(lexer(code)).toEqual(expected);
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
    expect(lexer(code)).toEqual(expected);
  })
});
