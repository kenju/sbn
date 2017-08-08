import { compile } from '../compiler';

describe('compile()', () => {
  it('compile "Paper 0 Pen 100 Line 0 50 100 50" to SVG HTML Tag', () => {
    const expected = '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="100" height="100" fill="rgb(100%, 100%, 100%)"></rect><line x1="0" y1="50" x2="100" y2="50" stroke="rgb(0%, 0%, 0%)" stroke-linecap="round"></line></svg>';
    const code = 'Paper 0 Pen 100 Line 0 50 100 50';
    const actual = compile(code);
    expect(actual).toEqual(expected);
  });
});
