import { useState } from 'react'
// import he from 'he'
import React from 'react'
import {fetchQuiz} from "./utils.jsx"
// import {data} from "./assets/data.js"
import Question from "./components/Question.jsx"
import {clsx} from "clsx"

function App() {
  const [start,setStart]= React.useState(false)
  const [quiz,setQuiz]=React.useState([])

  const questions=quiz.map((question,index)=>(
    <Question key={index} id={index} data={question}/>
  ))

  async function startQuiz(){
    setStart(true)
    setQuiz(await fetchQuiz())
  }
  return (
    <>
      <div className={clsx("top-right-shape",start && "after-shape")}></div>
      <div className={clsx("bottom-left-shape",start && "after-shape")}></div>
    <main>
      {!start && (<section className="hero">
        <h1>Quizzical</h1>
        <p>Are you pro on Comics ?</p>
        <div className="start-button" onClick={startQuiz}>Start quiz</div>
      </section>)}

      {quiz.length>0 && (<form>
            {questions}
            <section class="submit-section">
            <span>You scored 3/5 correct answers</span><button type='submit' className="submit-btn">Check answers</button>
            </section>
        </form>)
        }
      </main>
    </>
  )
}

export default App
