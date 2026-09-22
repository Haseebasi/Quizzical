import { useState } from 'react'
import React from 'react'
import {fetchQuiz} from "./utils.jsx"
import Question from "./components/Question.jsx"
import {clsx} from "clsx"

function App() {
  const [start,setStart]= React.useState(false)
  const [quiz,setQuiz]=React.useState([])
  const [selectedValues,setSelectedValues]=React.useState({})
  const [correctAnswers,setCorrectAnswers]=React.useState([])

  const isSubmitted = false
  const count=0
  const questions=quiz.map((question,index)=>(
    <Question key={index} 
    id={index}
    data={question} 
    selectedValues={selectedValues} 
    correctAnswers={correctAnswers} 
    isSubmitted={isSubmitted}/>
  ))

  async function startQuiz(){
    setStart(true)
    const quizArray=await fetchQuiz()
    setQuiz(quizArray)
    const answers=quizArray.map((data)=>{return data.correct_answer})
    setCorrectAnswers(answers)
  }
  function handleSubmit(e){
    e.preventDefault()
    const formData=new FormData(e.currentTarget)
    const allSubmitted=Object.fromEntries(formData.entries());
    setSelectedValues(allSubmitted)
    isSubmitted=true
    updateCount()
    
  }
  function updateCount(key){

    Object.keys(allSubmitted).forEach((key)=>{
      if(selectedValues.key === correctAnswers[Number(key)])
      count++
    })
    
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

      {quiz.length>0 && (<form onSubmit={handleSubmit}>
            {questions}
            <section className="submit-section">
            <span>You scored 3/5 correct answers</span><button type='submit' className="submit-btn">Check answers</button>
            </section>
        </form>)
        }
      </main>
    </>
  )
}

export default App
