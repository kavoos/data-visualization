import * as d3 from 'd3'

export const drawMouse = (
  g: d3.Selection<SVGGElement, unknown, null, undefined>,
  mouseRadius: number,
  mouseWidth: number
) => {
  const mouseArc = d3.arc<unknown>()
    .innerRadius(mouseRadius)
    .outerRadius(mouseRadius + mouseWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3 / 2)

  g
    .append('path')
    .attr('d', mouseArc)
}