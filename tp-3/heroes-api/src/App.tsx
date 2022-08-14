import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FetchHeroes } from './heroes/context/FetchHeroes'
import './App.css'
import { HeroByPublisherPage } from './heroes/pages/HeroByPublisherPage'

function App() {

  return (
    <div className="App">
    
        <HeroByPublisherPage/>
    </div>
  )
}

export default App
