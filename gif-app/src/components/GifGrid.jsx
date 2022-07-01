
import {useEffect} from 'react';
import { getGifs } from '../helper/GetGifs';
import { useState } from 'react';
export const GifGrid = ({category})=>{

    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState([]);

    const getImages = async ()=>{
        const newImages = await getGifs(category);
        setImagenes(newImages);
    }
    useEffect(()=>{
        getImages();
    }
    ,[]);

    return(
        <>
            <h3>{category}</h3>
            <ul>
                {imagenes.map(img =>(
                    <GifGridItem key={img.id} {...img}/>    
                ))}
            </ul>
        </>
    )
}