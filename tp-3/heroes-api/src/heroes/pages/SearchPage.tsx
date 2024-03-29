import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { useContext } from "react";
import { FetchHeroes } from "../context/FetchHeroes";
export const SearchPage = () => {
  const { searchResults, handleSearchPage }:any = useContext(FetchHeroes);

  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { formState, onInputChange }:any = useForm({
    searchText: q,
  });

  useEffect(() => {
    handleSearchPage(q);
  }, [q]);

  const onSearchSubmit = (e:any) => {
    e.preventDefault();

    if (formState.searchText.trim().length <= 1) return;

    navigate(`?q=${formState.searchText}`);
  };

  return (
    <>
      <section className="search-container">
        <h1>Search your favorite HERO</h1>

        <form onSubmit={onSearchSubmit} className="search-container-form">
          <input
            type="text"
            placeholder="Search a hero"
            className=""
            name="searchText"
            autoComplete="off"
            value={formState.searchText}
            onChange={(e) => onInputChange(e)}
          />

          <button className="">Search</button>
        </form>

        <article className="search-container-list">
          <h4>Results</h4>

          <div
            className="search-hero"
            style={{ display: q === "" ? "" : "none" }}
          >
            Search a hero
          </div>

          {!searchResults.length && q !== "" && (
            <div className="search-no-hero">
              No hero with <b>{q}</b>
            </div>
          )}

          {searchResults?.map((hero:any) => (
            <HeroCard key={hero.id} {...hero}></HeroCard>
          ))}
        </article>
      </section>
    </>
  );
};
