import React from 'react'
import { fetchHeroes } from '../context/fetchHeroes'
import {AllHeroes} from '../context/AllHeroes'

export const HeroByPublisherPage = () => {
    //fetchHeroes(all)
  return (
    <>
        <h1>Hero By Publisher Page</h1>
        <p>This is the Hero By Publisher Page</p>
        <AllHeroes/>
    </>
  )
}

