RSpec.describe SbnCompilerRb::Generator do
  describe "#generate" do
    let(:generator) { described_class.new }

    let(:token_class) { SbnCompilerRb::Token }
    let(:expression_class) { SbnCompilerRb::Expression }
    let(:argument_class) { SbnCompilerRb::Argument }
    let(:ast_class) { SbnCompilerRb::AST }
    let(:sbn_ast_class) { SbnCompilerRb::SbnAST }

    subject { generator.generate(sbn_ast) }

    let(:sbn_ast) {
      sbn_ast_class.new(
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
    }

    it do
      expected = '<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="100" height="100" fill="rgb(100%, 100%, 100%)"></rect><line x1="0" y1="50" x2="100" y2="50" stroke="rgb(0%, 0%, 0%)" stroke-linecap="round"></line></svg>'
      is_expected.to eq expected
    end
  end
end
