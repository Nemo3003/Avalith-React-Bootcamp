import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GIFApp = () => {
    
    const [categories, setCategories] = useState([])
    
    const handleAddCategory = (value)=>{
        setCategories([value, ...categories]);

    }

    return (
        <div>
        {/* The Title */}
            <h1>GIFApp</h1>
        {/* The Search Bar */}

        {/* The input*/}
        <AddCategory addCategory={handleAddCategory}/>
        {/* The GIF list
          <button onClick={handleAddCategory}>Agregar</button>
        */}
     

            {
                categories.map(category => <GifGrid key={category} category={category}/>)
            }


        </div>
        
    );
    }