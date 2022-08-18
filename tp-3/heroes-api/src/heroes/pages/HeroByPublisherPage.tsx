import React from "react";
import { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HeroList } from "../components/HeroList";
import { FetchHeroes } from "../context/FetchHeroes";
import queryString from "query-string";
import { useEffect, useState } from "react";
import "../scss/heroes.css"

export const HeroByPublisherPage = () => {
  const { heroes , loading, publishers, handlePublisher, actualPublisher }:any =
    useContext(FetchHeroes);
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

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
          <h2>SELECT YOUR FAVORITE PUBLISHER</h2>
          <select
            onChange={(e) => handleSelectOption(e)}
            value={actualPublisher}
          >
            <option value="ALL">All</option>
            {publishers.map((publish:any) => (
              <option key={publish} value={publish}>
                {publish}
              </option>
            ))}
          </select>
        </form>
      </section>

      {loading ? (
        <div className="heroes-wrapper">
          <div className="heroes-aws">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <HeroList publisher={heroes}></HeroList>
      )}
    </>
  );
};
