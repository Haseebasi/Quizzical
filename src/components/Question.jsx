import { useState,useEffect } from "react"
import he from "he"
export default function Question(props){
    const [options,setOptions] = useState([])
    useEffect(() => {
    const shuffled = pushRandom(props.data.incorrect_answers, props.data.correct_answer);
    setOptions(shuffled);
  }, [props.data.incorrect_answers, props.data.correct_answer]);
    const optionButtons = options.map((option, index) => (
    
    <label 
        key={`q${props.id}opt${index}`} 
        htmlFor={`q${props.id}opt${index}`}>
    <input 
        type="radio" id={`q${props.id}opt${index}`} 
        name={props.id} value={option} disabled={props.isSubmitted}/>
    <span className="btn-pill">
            {he.decode(option)}
    </span>
  </label>
    
))
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