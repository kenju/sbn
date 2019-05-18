RSpec.describe SbnCompilerRb::Parser do
  describe "#parse" do
    let(:parser) { described_class.new }
    let(:token_class) { SbnCompilerRb::Token }
    let(:expression_class) { SbnCompilerRb::Expression }
    let(:argument_class) { SbnCompilerRb::Argument }
    let(:ast_class) { SbnCompilerRb::AST }
    subject { parser.parse(tokens) }

    let(:tokens) { [
      token_class.new("word", "Paper"),
      token_class.new("number", 0),
      token_class.new("word", "Pen"),
      token_class.new("number", 100),
      token_class.new("word", "Line"),
      token_class.new("number", 0),
      token_class.new("number", 50),
      token_class.new("number", 100),
      token_class.new("number", 50),
    ] }

    it do
      is_expected.to eq ast_class.new(
        "Drawing",
        [
          expression_class.new(
            "CallExpression",
            "Paper",
            [ argument_class.new("NumberLiteral", 0) ]
          ),
          expression_class.new(
            "CallExpression",
            "Pen",
            [ argument_class.new("NumberLiteral", 100) ]
          ),
          expression_class.new(
            "CallExpression",
            "Line",
            [
              argument_class.new("NumberLiteral",   0),
              argument_class.new("NumberLiteral",  50),
              argument_class.new("NumberLiteral", 100),
              argument_class.new("NumberLiteral",  50),
            ]
          )
        ]
      )
    end
  end
end
