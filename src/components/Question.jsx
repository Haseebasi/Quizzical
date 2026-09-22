import { useState,useEffect } from "react"
import he from "he"
import {clsx} from "clsx"


const keysOfselected=Object.keys(props.selectedValues)
const valuesOfselected = Object.values(props.selectedValues)
export default function Question(props){
    const [options,setOptions] = useState([])
    useEffect(() => {
    const shuffled = pushRandom(props.data.incorrect_answers, props.data.correct_answer);
    setOptions(shuffled);
  }, [props.data.incorrect_answers, props.data.correct_answer]);
    const optionButtons = options.map((option, index) => {
        const isAnswered = props.isSubmitted && keysOfselected.includes(String(props.id))
        const indexInSelected = isAnswered && keysOfselected.indexOf(String(props.id))
        const isSelected=isAnswered && valuesOfselected[indexInSelected] === option
        // const isScored=isSelected && props.correctAnswers[props.id] === option
        const isCorrect = isAnswered && props.data.correct_answer
        const isWrong=isSelected && !props.correctAnswers[props.id] === option
        
    
    return(<label 
        key={`q${props.id}opt${index}`} 
        htmlFor={`q${props.id}opt${index}`}>
    <input 
        type="radio" 
        id={`q${props.id}opt${index}`} 
        name={props.id} value={option} 
        disabled={props.isSubmitted}
        />
    <span className={clsx("option-pill",
    {
        selected:isSelected,
        "wrong-answer":isWrong,
        "correct-answer":isCorrect
    }
    )}>
            {he.decode(option)}
    </span>
  </label>)
}
  
)
    return(
        <section className="question-pad">
            <p>{he.decode(props.data.question)}</p>
            <div className="radio-group">
            {optionButtons}
            </div>
        </section>
    )
}


function pushRandom(arr,value){
    const newArr=[...arr]
    const randomIndex=Math.floor(Math.random() * (arr.length + 1));
    newArr.splice(randomIndex, 0, value);
    return newArr
}