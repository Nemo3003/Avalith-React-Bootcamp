import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithHooks } from './02-useEffect/FormWithHooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hooks App</h1>
      <hr />
      <CounterApp/>,
      <hr />
      <CounterWithCustomHooks/>
      <hr />
      <SimpleForm/>
      <hr />
      <FormWithHooks/>
    </div>
  )
}

export default App
