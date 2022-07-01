"use strict";

export const GetGifs = async ()=>{
    const API_KEY = 'YawPDcDIqLPaM42VuVlZ6g9WThosQyGc';
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=YawPDcDIqLPaM42VuVlZ6g9WThosQyGc&q=Dragon+Ball&limit=2&offset=0&rating=g&lang=en';

 //make usage of this api
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
  const gifs = data.map(img => (
    {
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }
  ));
    return gifs;
}