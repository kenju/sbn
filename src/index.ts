export function lexer(code: string) {
  return code.split(/\s+/)
    .map((token) => {
      if (isNaN(parseInt(token, 10))) {
        return {
          type: 'word',
          value: token,
        };
      } else {
        return {
          type: 'number',
          value: parseInt(token, 10),
        };
      }
    });
}
