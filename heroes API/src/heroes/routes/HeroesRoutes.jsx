import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/NavBar'
import { DcPage } from '../pages/DcPage'
import { HeroByPublisherPage } from '../pages/HeroByPublisherPage'
import { HeroPage } from '../pages/HeroPage'
import { MarvelPage } from '../pages/MarvelPage'
import { SearchPage } from '../pages/SearchPage'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
        <Routes>
            <Route path='marvel' element={<MarvelPage />} />
            <Route path='dc' element={<DcPage />} />
            <Route path='all' element={<HeroByPublisherPage />} />

            <Route path='search' element={<SearchPage />} />
            <Route path='hero/:heroId' element={<HeroPage />} />           

            <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes> 
        </div>
    </>
  )
}
