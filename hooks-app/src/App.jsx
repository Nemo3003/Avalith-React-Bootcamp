import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CounterApp } from './01-useState/CounterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hooks App</h1>
      <hr />
      <CounterApp/>
    </div>
  )
}

export default App
