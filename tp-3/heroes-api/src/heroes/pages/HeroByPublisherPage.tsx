import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeroList } from "../components/HeroList";
import { FetchHeroes } from "../context/FetchHeroes";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { SpinningCircles  } from 'react-loading-icons'
import "../scss/heroes.css"

export const HeroByPublisherPage = () => {
  const { heroes , loading, publishers, handlePublisher, actualPublisher }:any =
    useContext(FetchHeroes);
  const navigate = useNavigate();
  const locationHero = useLocation();
  const { q = "" } = queryString.parse(locationHero.search);

  useEffect(() => {
    handlePublisher(q);
  }, [q]);

  const handleSelectOption = (e:any) => {
    navigate(`?q=${e.target.value}`);
  };

  return (
    <>
      <section className="heroes-section">
        <form className="heroes-form">
          <h2>SELECT A PUBLISHER</h2>
          <select
            onChange={(e) => handleSelectOption(e)}
            value={actualPublisher}>
            <option value="all">All</option>
            {publishers.map((publish:any) => (
              <option key={publish} value={publish}>
                {publish}
              </option>))}
          </select>
        </form>
      </section>
      {loading ? (
        <SpinningCircles />
      ) : (
        <HeroList publisher={heroes}></HeroList>
      )}
    </>
  );
};
