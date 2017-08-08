import { transformer } from '../transformer';

describe('transformer()', () => {
  it('transform "Paper 0 Pen 100 Line 0 50 100 50" AST for SVG AST', () => {
    const expected = {
      tag: "svg",
      attr: {
        width: 100,
        height: 100,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      },
      body: [
        {
          tag: "rect",
          attr: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill: "rgb(100%, 100%, 100%)"
          },
          body: []
        },
        {
          tag: "line",
          attr: {
            x1: "0",
            y1: 50,
            x2: "150",
            y2: 50,
            stroke: "rgb(0%, 0%, 0%)",
            "stroke-linecap": "round"
          },
          body: []
        }
      ]
    };

    const ast = {
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
    const actual = transformer(ast);
    expect(actual).toEqual(expected);
  })
});
