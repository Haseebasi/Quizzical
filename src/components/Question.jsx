import { useState,useEffect } from "react"
import he from "he"
import {clsx} from "clsx"



export default function Question(props){
    const [options,setOptions] = useState([])
    const keysOfselected=Object.keys(props.selectedValues)
    const valuesOfselected = Object.values(props.selectedValues)
    useEffect(() => {
    const shuffled = pushRandom(props.data.incorrect_answers, props.data.correct_answer);
    setOptions(shuffled);
  }, [props.data.incorrect_answers, props.data.correct_answer]);
    const optionButtons = options.map((option, index) => {
        const isAnswered = props.isSubmitted && keysOfselected.includes(String(props.id));
        const userSelection = isAnswered && props.selectedValues[props.id]; 
        const isSelected = isAnswered && userSelection === option;
        const isCorrect = props.isSubmitted && props.data.correct_answer === option;
        const isWrong = isSelected && props.data.correct_answer !== option;
        
    
    return(<label 
        key={`q${props.id}opt${index}`} 
        htmlFor={`q${props.id}opt${index}`}
        aria-label={`option for${props.id} ${he.decode(option)}`}>
    <input 
        type="radio" 
        id={`q${props.id}opt${index}`} 
        name={props.id} value={option} 
        disabled={props.isSubmitted}
        />
    <span className={clsx("option-pill",
    {

        wrong:isWrong,
        correct:isCorrect
    }
    )} aria-label={isCorrect?`${he.decode(option)}, correct answer`:`${he.decode(option)}, selected incorrect answer`}
    >
            {he.decode(option)}
    </span>
  </label>)
}
  
)
    return(
        <section className="question-pad" role="region" aria-label={`Question ${props.id + 1}:${he.decode(props.data.question)}`}>
            <p >{he.decode(props.data.question)}</p>
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