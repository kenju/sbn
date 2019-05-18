module SbnCompilerRb
  class Parser
    def parse(tokens)
      body = tokens.reduce([]) { |memo, token|
        if token.type == "word"
          memo << Expression.new("CallExpression", token.value, [])
        elsif token.type == "number"
          last_expression = memo.reverse_each.detect { |exp| exp.type == "CallExpression" }
          last_expression.arguments << Argument.new("NumberLiteral", token.value)
        end
        memo
      }
      AST.new("Drawing", body)
    end
  end
end
