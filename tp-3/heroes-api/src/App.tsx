import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FetchHeroes } from './heroes/context/FetchHeroes'
import './heroes/scss/styles.css'
import { HeroByPublisherPage } from './heroes/pages/HeroByPublisherPage'
import { Navbar } from './components/Navbar'


function App() {

  return (
    <>
<Navbar />
    <div className="App pyro">
      
      <div className="before"></div>
        
        <HeroByPublisherPage/>
      <div className="after"></div>
    </div>
    </>
  )
}

export default App
