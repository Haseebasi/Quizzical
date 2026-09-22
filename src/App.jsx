import { useState } from 'react'
// import he from 'he'
import React from 'react'
import {fetchQuiz} from "./utils.jsx"
// import {data} from "./assets/data.js"
import Question from "./components/Question.jsx"
import {data} from "./assets/data.js"
function App() {
  const [start,setStart]= React.useState(true)
  const [quiz,setQuiz]=React.useState([])
  async function startQuiz(){
    setStart(true)
    setQuiz(await fetchQuiz())
  }
  return (
    <>
      <div className="top-right-shape"></div>
      <div className="bottom-left-shape"></div>
    <main>
      {!start && (<section className="hero">
        <h1>Quizzical</h1>
        <p>Are you pro on Comics ?</p>
        <div className="start-button" onClick={startQuiz}>Start quiz</div>
      </section>)}
      <form>
        <Question key="index1" data={data[0]} id="index1"/>
      </form>
      </main>
    </>
  )
}

export default App
