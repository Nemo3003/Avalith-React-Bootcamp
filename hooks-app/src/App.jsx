import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithHooks } from './02-useEffect/FormWithHooks'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'

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
      <hr />
      <MultipleCustomHooks/>
      <hr />
      <FocusScreen/>
      <hr />
      <Layout/>
    </div>
  )
}

export default App
