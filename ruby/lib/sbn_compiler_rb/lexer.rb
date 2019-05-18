module SbnCompilerRb
  class Lexer
    def tokenize(code)
      code.split(/\s+/)
        .map { |str|
          begin
            number = Integer(str)
            Token.new("number", number)
          rescue ArgumentError => e
            Token.new("word", str)
          end
        }
    end
  end
end
