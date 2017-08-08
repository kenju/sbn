import { parser } from '../parser';

describe('parser()', () => {
  it('parse "Paper 0 Pen 100 Line 0 50 100 50" tokens', () => {
    const expected = {
      type: "Drawing",
      body: [
        {
          type: "CallExpression",
          name: "Paper",
          arguments: [
            {
              type: "NumberLiteral",
              value: 0,
            },
          ]
        },
        {
          type: "CallExpression",
          name: "Pen",
          arguments: [
            {
              type: "NumberLiteral",
              value: 100,
            },
          ]
        },
        {
          type: "CallExpression",
          name: "Line",
          arguments: [
            { type: "NumberLiteral", value: 0, },
            { type: "NumberLiteral", value: 50, },
            { type: "NumberLiteral", value: 100, },
            { type: "NumberLiteral", value: 50, },
          ]
        }
      ]
    };
    const tokens = [
      { type: "word", value: "Paper" },
      { type: "number", value: 0 },

      { type: "word", value: "Pen" },
      { type: "number", value: 100 },

      { type: "word", value: "Line" },
      { type: "number", value: 0 },
      { type: "number", value: 50 },
      { type: "number", value: 100 },
      { type: "number", value: 50 },
    ];
    const actual = parser(tokens);
    expect(actual).toEqual(expected);
  })
});
