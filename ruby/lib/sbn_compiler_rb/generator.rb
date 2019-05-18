module SbnCompilerRb
  class Generator
    def generate(sbn_ast)
      attributes = build_attributes(sbn_ast.attr)
      elements = build_elements(sbn_ast.body)
      build_tag(tag: "svg", attributes: attributes, elements: elements)
    end

    private

    def build_attributes(sbn_ast_attr)
      sbn_ast_attr.map { |k, v| "#{k}=\"#{v}\"" }.join(' ')
    end

    def build_elements(sbn_ast_body)
      sbn_ast_body.map { |expressoin|
        tag = expressoin.tag
        attributes = build_attributes(expressoin.attr)
        build_tag(tag: tag, attributes: attributes)
      }.join
    end

    def build_tag(tag:, attributes:, elements: "")
      "<#{tag} #{attributes}>#{elements}</#{tag}>"
    end
  end
end
