import  React from 'react';
import { useState, useEffect } from 'react';
import { FetchHeroes } from '../context/FetchHeroes';


export const HeroByPublisherPage = () => {
    return(
        <>
        {/**Select publisher */}
        
        <select>
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
        </select>
            <FetchHeroes datas={"all"}/>
           
        </>
    )
}