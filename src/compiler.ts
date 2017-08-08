import { lexer } from './lexer';
import { parser } from './parser';
import { transformer } from './transformer';
import { generator } from './generator';

export function compile(code) {
  return generator(transformer(parser(lexer(code))));
}
