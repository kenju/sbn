export interface Token {
  type: string;
  value: string | number;
}

export function lexer(code: string): Token[] {
  return code.split(/\s+/)
    .map((token) => {
      const maybeInt = parseInt(token, 10);
      if (isNaN(maybeInt)) {
        return {
          type: 'word',
          value: token,
        };
      } else {
        return {
          type: 'number',
          value: maybeInt,
        };
      }
    });
}
