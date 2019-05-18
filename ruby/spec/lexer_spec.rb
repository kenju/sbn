RSpec.describe SbnCompilerRb::Lexer do
  describe "#tokenize" do
    let(:lexer) { described_class.new }
    let(:token_class) { SbnCompilerRb::Token }
    subject { lexer.tokenize(code) }

    context "when Paper" do
      let(:code) { "Paper 0" }
      it do
        tokens = [
          token_class.new("word", "Paper"),
          token_class.new("number", 0),
        ]
        is_expected.to eq tokens
      end
    end

    context "when Pen" do
      let(:code) { "Pen 100" }
      it do
        tokens = [
          token_class.new("word", "Pen"),
          token_class.new("number", 100),
        ]
        is_expected.to eq tokens
      end
    end

    context "when Line" do
      let(:code) { "Line 0 50 100 50" }
      it do
        tokens = [
          token_class.new("word", "Line"),
          token_class.new("number", 0),
          token_class.new("number", 50),
          token_class.new("number", 100),
          token_class.new("number", 50),
        ]
        is_expected.to eq tokens
      end
    end
  end
end
