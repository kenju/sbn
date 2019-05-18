module SbnCompilerRb
  class Transformer
    def transform(ast)
      pen_color_value = 100

      body = ast.body.reduce([]) { |memo, expression|
        if expression.name == "Paper"
          memo << SbnAST.new(
            "rect",
            {
              x: 0,
              y: 0,
              width: 100,
              height: 100,
              fill: make_color(expression.arguments[0].value),
            },
            [],
          )
        elsif expression.name == "Pen"
          pen_color_value = expression.arguments[0].value
        elsif expression.name == "Line"
          memo << SbnAST.new(
            "line",
            {
              x1: expression.arguments[0].value,
              y1: 100 - expression.arguments[1].value,
              x2: expression.arguments[2].value,
              y2: 100 - expression.arguments[3].value,
              stroke: make_color(pen_color_value),
              'stroke-linecap': 'round',
            },
            [],
          )
        end
        memo
      }
      SbnAST.new("svg", svg_attr, body)
    end

    private

    def make_color(value)
      level = 100 - value.to_i
      "rgb(#{level}%, #{level}%, #{level}%)"
    end

    def svg_attr
      {
        width: 100,
        height: 100,
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
      }
    end
  end
end
