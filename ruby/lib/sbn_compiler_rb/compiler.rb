module SbnCompilerRb
  class Compiler
    def compile(code)
      tokens = Lexer.new.tokenize(code)
      ast = Parser.new.parse(tokens)
      sbn_ast = Transformer.new.transform(ast)
      Generator.new.generate(sbn_ast)
    end
  end
end
