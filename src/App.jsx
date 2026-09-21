import { useState } from 'react'
import he from 'he'
import React from 'react'

function App() {
  const [start,setStart]= React.useState(false)
  function startQuiz(){
    setStart(true)
  }
  return (
    <>
      <div className="top-right-shape"></div>
      <div className="bottom-left-shape"></div>

      {!start && (<section className="hero">
        <h1>Quizzical</h1>
        <p>Are you pro on anime ?</p>
        <div className="start-button" onClick={startQuiz}>Start quiz</div>
      </section>)}
    </>
  )
}

export default App
