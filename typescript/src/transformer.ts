import { AST } from './parser';

export interface SvgAST {
  tag: string;
  attr: {
    width: number;
    height: number;
    viewBox: string;
    xmlns: string;
    version: string;
  },
  body: any[];
}

export function transformer(ast: AST): SvgAST {
  const makeColor = (value) => {
    const level = 100 - parseInt(value, 10);
    return `rgb(${level}%, ${level}%, ${level}%)`;
  };

  let penColorValue = 100;

  const body = ast.body.reduce((accum, node) => {
    switch (node.name) {
      case 'Paper':
        accum.push({
          tag: 'rect',
          attr: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill: makeColor(node.arguments[0].value),
          },
          body: [],
        });
        return accum;
      case 'Pen':
        penColorValue = node.arguments[0].value;
        return accum;
      case 'Line':
        accum.push({
          tag: 'line',
          attr: {
            x1: node.arguments[0].value,
            y1: 100 - node.arguments[1].value,
            x2: node.arguments[2].value,
            y2: 100 - node.arguments[3].value,
            stroke: makeColor(penColorValue),
            'stroke-linecap': 'round',
          },
          body: [],
        });
        return accum;
      default:
        throw new Error(`${node.name} is not supported AST body name`);
    };
  }, []);

  return {
    tag: 'svg',
    attr: {
      width: 100,
      height: 100,
      viewBox: '0 0 100 100',
      xmlns: 'http://www.w3.org/2000/svg',
      version: '1.1',
    },
    body: body,
  }
}
