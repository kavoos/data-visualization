import * as d3 from 'd3'

export const drawEye = (
    g: d3.Selection<SVGGElement, unknown, null, undefined>,
    eyeRadius: number,
    eyeOffsetX: number,
    eyeOffsetY: number,
    side: 'LEFT' | 'RIGHT'
  ) => {
  g
    .append('circle')
    .attr('r', eyeRadius)
    .attr('fill', 'black')
    .attr('cx', eyeOffsetX * (side === 'LEFT' ? -1 : 1))
    .attr('cy', -eyeOffsetY)
}