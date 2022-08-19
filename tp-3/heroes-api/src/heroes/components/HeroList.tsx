import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useDetails } from "../../hooks/useDetails";
import { HeroCard } from "./HeroCard";
import { PageList } from "./PageList";
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
  } = useDetails(
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
    <PageList
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          renderPageNumbers={renderPageNumbers}
          pageDecrementBtn={pageDecrementBtn}
          pageIncrementBtn={pageIncrementBtn}
          currentPage={counter}
          pages={pages}
        />
      <section className="section-heroes-cards">
        <ul className="cards_container">
          {currentItems.map((publish:any) => (
            <HeroCard key={publish.id} {...publish}></HeroCard>
          ))}
        </ul>
       
      </section>
      <footer>
        &copy; {new Date().getFullYear()} <p>Ulises M Melgarejo</p>
        
      <PageList
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          renderPageNumbers={renderPageNumbers}
          pageDecrementBtn={pageDecrementBtn}
          pageIncrementBtn={pageIncrementBtn}
          currentPage={counter}
          pages={pages}
        />
      </footer>
    </>
  );
};
