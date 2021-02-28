import React from 'react'
import './App.css'

function App() {
  const height = 500
  const width = 960
  const centerX = width / 2
  const centerY = height / 2
  const strokeWidth = 20

  const eyeOffsetX = 90
  const eyeOffsetY = 80
  const eyeRadius = 50

  const faceRadius = centerY - strokeWidth / 2

  return (
    <div>
      <svg
        width={width}
        height={height}
      >
        <circle
          r={faceRadius}
          fill='yellow'
          stroke='black'
          strokeWidth={strokeWidth}
          cx={centerX}
          cy={centerY}
        />
        <circle
          r={eyeRadius}
          fill='black'
          cx={centerX + eyeOffsetX}
          cy={centerY - eyeOffsetY}
        />
        <circle
          r={eyeRadius}
          fill='black'
          cx={centerX - eyeOffsetX}
          cy={centerY - eyeOffsetY}
        />
      </svg>
    </div>
  );
}

export default App
