import React, { FC, useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { drawFace } from './face'
import { drawEye } from './eye'
import { drawMouse } from './mouse'

interface SmilyFaceConfig {
  width: number
  height: number
  centerX: number
  centerY: number
  strokeWidth: number
  eyeOffsetX: number
  eyeOffsetY: number
  eyeRadius: number
  faceRadius: number
  mouseWidth: number
  mouseRadius: number
}

export const SmilyFace: FC = () => {
  const svgContainer = useRef<null | HTMLDivElement>(null)
  const svgContext = useRef<null | SVGSVGElement>(null)

  const initConfig: SmilyFaceConfig = {
    width: 500,
    height: 500,
    centerX: 250,
    centerY: 250,
    strokeWidth: 20,
    eyeOffsetX: 90,
    eyeOffsetY: 80,
    eyeRadius: 50,
    faceRadius: 240,
    mouseWidth: 20,
    mouseRadius: 160
  }

  const [smilyFaceConfig, setSmilyFaceConfig] = useState(initConfig)

  useEffect(() => {
    if (svgContainer.current) {
      const w = svgContainer.current.clientWidth
      const h = svgContainer.current.clientHeight

      setSmilyFaceConfig(prev => {
        prev.width = w
        prev.height = h
        prev.centerX = w / 2
        prev.centerY = h / 2
        return prev
      })
    }
  }, [])

  useEffect(() => {
    const {
      width,
      height,
      centerX,
      centerY,
      strokeWidth,
      eyeOffsetX,
      eyeOffsetY,
      eyeRadius,
      faceRadius,
      mouseWidth,
      mouseRadius
     } = smilyFaceConfig

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
    <div ref={svgContainer} style={{width: '100%', height: '100%'}}>
      <svg ref={svgContext} />
    </div>
  )
}
