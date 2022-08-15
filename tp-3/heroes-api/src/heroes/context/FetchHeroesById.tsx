import React from 'react'
import {useState, useEffect} from 'react'

export const FetchHeroesById = ({id}:any) => {
    const [heroId, setHeroId]= useState<any[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        const FetchData = async ()=>{
            const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
            const data = await response.json();
            setHeroId(data);
            setLoading(false);
        }
        FetchData();
    } ,[])
    return loading? (<p>Loading...</p>) : (

        <div className=" text-center flex-added">
            <h1>Super Heroes</h1>
            <ul>

            </ul>
        

        </div>)
                
             {/**Filter by publisher */
                
        }
           
      
    
                
}

