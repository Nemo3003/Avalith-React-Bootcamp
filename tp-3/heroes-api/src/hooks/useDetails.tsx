import { useEffect, useState } from "react";

let $zero = 0;let $one = 1;let $two = 2;let $three = 3;let $four = 4;let $five = 5;let $six = 6;let $seven = 7;let $eight = 8;   

export const useDetails = (arr:any,ipp:any,counter:any,increment:any,decrement:any,reset:any,setCounter:any) => {  
        
  const [itemsPerPage] = useState(ipp);
  const [pageNumberLimit] = useState($eight);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState($eight);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState($zero);
//Declare all variables and constants that would be used
//***************************************************************************** */
//Constants
const indexOfLastItem = counter * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);
const addingNumbs = maxPageNumberLimit + pageNumberLimit
const subtractingNumbs = minPageNumberLimit - pageNumberLimit;
const substractingNumbsTwo = maxPageNumberLimit - pageNumberLimit
const pages = [];
//Variables
let countingUp = counter + $one;
let countingDown = counter - $one;
let pageDecrementBtn = null;
let pageIncrementBtn = null;
//**************************************************************************** */  
  for (let i = 1; i <= Math.ceil(arr.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (e:any) => {
    setCounter(Number(e.target.id));
  };
   //This will allow us to adjust the amount of pages
  const renderPageNumbers = pages.map((number:any) => {
    if (number < maxPageNumberLimit + $one && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  //Here we control whether the user goes backwards or fordwards 
  const handlePrevPage = () => {
    decrement($one);
    if (countingDown % pageNumberLimit === $zero) {
      setMaxPageNumberLimit(substractingNumbsTwo);
      setMinPageNumberLimit(subtractingNumbs);
    }
  };
  const handleNextPage = () => {
    increment($one);

    if (countingUp > maxPageNumberLimit) {
      setMaxPageNumberLimit(addingNumbs);
      setMinPageNumberLimit(subtractingNumbs);
    }};

  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={() => handleNextPage()}>
        &hellip;
      </li>
    );
  }

  if (minPageNumberLimit >= $one) {
    pageDecrementBtn = (
      <li  onClick={() => handlePrevPage()}>
        &hellip;
      </li>
    );
  }

  return {renderPageNumbers,currentItems,pageDecrementBtn,pageIncrementBtn,handleNextPage,handlePrevPage,pages,};};