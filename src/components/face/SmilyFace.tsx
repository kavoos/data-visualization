import React, { FC, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { drawFace } from './face'
import { drawEye } from './eye'
import { drawMouse } from './mouse'

export const SmilyFace: FC = () => {
  const svgContext = useRef<null | SVGSVGElement>(null)

  const height = 500
  const width = 960
  const centerX = width / 2
  const centerY = height / 2
  const strokeWidth = 20

  const eyeOffsetX = 90
  const eyeOffsetY = 80
  const eyeRadius = 50

  const faceRadius = centerY - strokeWidth / 2

  const mouseWidth = 20
  const mouseRadius = 160

  useEffect(() => {
    const context = d3
      .select(svgContext.current)
      .attr('width', width)
      .attr('height', height)

    const g = context
      .append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`)

    drawFace(g, faceRadius, strokeWidth)
    drawEye(g, eyeRadius, eyeOffsetX, eyeOffsetY, 'LEFT')
    drawEye(g, eyeRadius, eyeOffsetX, eyeOffsetY, 'RIGHT')
    drawMouse(g, mouseRadius, mouseWidth)
  })

  return (
    <div>
      <svg ref={svgContext} />
    </div>
  )
}
