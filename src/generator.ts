import { SvgAST } from './transformer';

export function generator(svgAst: SvgAST): string {
  const createAttributes = (attr) => {
    return Object.keys(attr).map((key) => {
      return `${key}="${attr[key]}"`;
    }).join(' ');
  };

  const attributes = createAttributes(svgAst.attr);

  const elements = svgAst.body.map((node) => {
    return `<${node.tag} ${createAttributes(node.attr)}></${node.tag}>`;
  }).join('');

  return `<svg ${attributes}>${elements}</svg>`;
}
