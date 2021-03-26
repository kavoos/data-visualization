import React, { FC } from 'react'
import { SmilyFace } from  './components/face/SmilyFace'
import { Colors } from  './components/colors/Colors'
import './App.css'

const App: FC = () => {
  return (
    <>
      <SmilyFace />
      <Colors />
    </>
  )
}

export default App
