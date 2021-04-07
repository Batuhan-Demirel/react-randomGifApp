import React from 'react'
import "./App.css"
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <>
    <h1>Random Gif Generator</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
    </>
  )
}

export default App

