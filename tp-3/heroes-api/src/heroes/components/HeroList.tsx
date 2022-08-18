import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { usePagination } from "../../hooks/usePagination";
import { HeroCard } from "./HeroCard";
import { Pagination } from "./Pagination";
import "../scss/heroes.css";

interface Publisher {
    publisher: string|number;
}

export const HeroList = ({ publisher }:Publisher) => {
  const { counter, increment, decrement, reset, setCounter } = useCounter(1);

  const {
    renderPageNumbers,
    currentItems,
    pageDecrementBtn,
    pageIncrementBtn,
    handleNextPage,
    handlePrevPage,
    pages,
  } = usePagination(
    publisher,
    20,
    counter,
    increment,
    decrement,
    reset,
    setCounter
  );

  return (
    <>
      <section className="section-heroes-cards">
        <ul className="cards_container">
          {currentItems.map((publish:any) => (
            <HeroCard key={publish.id} {...publish}></HeroCard>
          ))}
        </ul>

       
      </section>
      <footer>
        &copy; {new Date().getFullYear()} <p>Ulises M Melgarejo</p>
        
      <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          renderPageNumbers={renderPageNumbers}
          pageDecrementBtn={pageDecrementBtn}
          pageIncrementBtn={pageIncrementBtn}
          currentPage={counter}
          pages={pages}
        ></Pagination>
      </footer>
    </>
  );
};
