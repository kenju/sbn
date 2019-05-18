RSpec.describe SbnCompilerRb::Transformer do
  describe "#transform" do
    let(:transformer) { described_class.new }

    let(:token_class) { SbnCompilerRb::Token }
    let(:expression_class) { SbnCompilerRb::Expression }
    let(:argument_class) { SbnCompilerRb::Argument }
    let(:ast_class) { SbnCompilerRb::AST }
    let(:sbn_ast_class) { SbnCompilerRb::SbnAST }

    subject { transformer.transform(ast) }

    let(:ast) {
      ast_class.new(
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
    }

    it do
      is_expected.to eq sbn_ast_class.new(
        "svg",
        {
          width: 100,
          height: 100,
          viewBox: "0 0 100 100",
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
        },
        [
          sbn_ast_class.new(
            "rect",
            {
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              fill: "rgb(100%, 100%, 100%)"
            },
            [],
          ),
          sbn_ast_class.new(
            "line",
            {
              x1: 0,
              y1: 50,
              x2: 100,
              y2: 50,
              stroke: "rgb(0%, 0%, 0%)",
              "stroke-linecap": "round"
            },
            [],
          )
        ]
      )
    end
  end
end
