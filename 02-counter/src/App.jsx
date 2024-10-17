import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)

  // counter should run b/w 0 to 20
  const addValue = () => {
    if (counter < 20)
    setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0)
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Hooks make changes in UI</h1>
      <h2>Counter Value: {counter}</h2>
      
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Delete Value</button>

      <footer>Hooks can change mulitple similar things <br /> Counter: {counter}</footer>
    </>
  )
}

export default App
