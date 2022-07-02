import React, { useState } from "react";
import { AddCategory } from "./components/AddCategoty";
import { GifGrid } from "./components/GifGrid";


export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {

    setCategories([value, ...categories]);
  };

  return (
    <>
     
      <h1>GifApp</h1>

      <AddCategory addCategory={handleAddCategory} />

      {
      categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))
      }
    </>
  );
};
