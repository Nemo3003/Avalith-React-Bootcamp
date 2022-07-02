import React, { useState } from "react";
import { AddCategory } from "./components/AddCategoty";
import { GifGrid } from "./components/GifGrid";

import styles from './css/styles.css';

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {

    setCategories([value, ...categories]);
  };

  return (
    <>
     
      <h1 className="title-app">GifApp</h1>

      <AddCategory addCategory={handleAddCategory} />
      
      {
      categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))
      }
    </>
  );
};
