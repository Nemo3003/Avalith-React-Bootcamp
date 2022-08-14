import React, { useState, useEffect } from "react";
import {Heroes} from "../components/Heroes";
import {HiArrowNarrowUp} from "react-icons/hi"
import {BiLoaderCircle} from "react-icons/bi"

export const AllHeroes = () => {
  const [heros, setHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"
      );
      const data = await response.json();
      setHeros(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span style={{display: "flex", justifyContent: "center"}}>
    <BiLoaderCircle size={170}/>
    </span>
  ) : (
    <section className="cards">
      {heros.map((hero) => (
        <Heroes key={hero.id} hero={hero} />
      ))}
     <HiArrowNarrowUp size={90}/>
    </section>
  );
};