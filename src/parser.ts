export interface AST {
  type: string;
  body: any[];
};

export function parser(tokens): AST {
  const body = tokens.reduce((accum, token) => {
    if (token.type === 'word') {
      switch (token.value) {
        case 'Paper':
        case 'Pen':
        case 'Line':
          accum.push({
            type: 'CallExpression',
            name: token.value,
            arguments: [],
          });
          return accum;
        default:
          throw new Error(`${token.value} is not supported token value.`);
      }
    } else if (token.type === 'number') {
      const lastExpression = accum[accum.length - 1];
      lastExpression.arguments.push({
        type: "NumberLiteral",
        value: token.value,
      });
      return accum;
    } else {
      throw new Error(`${token.type} is not supported token type.`);
    }
  }, []);

  return {
    type: 'Drawing',
    body: body
  };
}
