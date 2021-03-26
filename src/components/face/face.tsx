import * as d3 from 'd3'

export const drawFace = (
    g: d3.Selection<SVGGElement, unknown, null, undefined>,
    faceRadius: number,
    strokeWidth: number
  ) => {
  g
    .append('circle')
    .attr('r', faceRadius)
    .attr('fill', 'yellow')
    .attr('stroke', 'black')
    .attr('stroke-width', strokeWidth)
}