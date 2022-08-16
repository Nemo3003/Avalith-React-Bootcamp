import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";
import { useContext } from "react";
import { HeroesContext } from "../context/FetchHeroes";
import "./SearchPage.css";

export const SearchPage = () => {
  const { searchResults, handleSearchPage }:any = useContext(HeroesContext);

  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { formState, onInputChange } = useForm({
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
      <section className="search_container">
        <h1>Search your favorite HERO</h1>

        <form onSubmit={onSearchSubmit} className="search_container_form">
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

        <article className="search_container_list">
          <h4>Results</h4>

          <div
            className="search_container_searchhero"
            style={{ display: q === "" ? "" : "none" }}
          >
            Search a hero
          </div>

          {!searchResults.length && q !== "" && (
            <div className="search_container_nohero">
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
