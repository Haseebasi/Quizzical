import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="top-right-shape"></div>
      <div className="bottom-left-shape"></div>

      <section className="hero">
        <h1>Quizzical</h1>
        <p>Are you pro on anime ?</p>
        <div className="start-button">Start quiz</div>
      </section>
    </>
  )
}

export default App
