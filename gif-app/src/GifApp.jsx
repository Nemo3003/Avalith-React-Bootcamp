import React, { useState } from "react";
import { AddCategory } from "./components/AddCategoty";
import { GifGrid } from "./components/GifGrid";
import { Navbar } from "./components/NavBar";
/*import './css/small.css';
import  './css/large.css';*/


export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
  };
//This function is used to delete the category
  const handleRemotion = index => {
    const value = [...categories];
    value.splice(index, 1);
    setCategories(value);
  };

  
  return (
    <>
      {/* Titulo */}
      <h1 className="title-app">GifApp</h1>
    <Navbar/>
      {/* Input */}
      <AddCategory addCategory={handleAddCategory} />
      {/* Listado de Gif */}
      {
      React.Children.toArray(
      categories.map((category) => (
                <><button className="button-30" role="button" onClick={handleRemotion}>Delete Category</button><GifGrid className="categories" key={category} category={category}/></>
      ))
    )}
    </>
  );
};