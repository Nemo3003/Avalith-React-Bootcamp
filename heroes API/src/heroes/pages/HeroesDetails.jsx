import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {HiArrowLeft} from "react-icons/hi";
import {BiLoaderCircle} from "react-icons/bi"


export const HeroDetails = ({ id }) => {
  const [hero, setHero] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      const response = await fetch(
        `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`
      );
      const data = await response.json();

      console.log(data);
      setHero(data);
      setIsLoading(false);
    };
    fetchHeroData();
  }, [id]);

  return isLoading ? (
    <BiLoaderCircle size={170}/>
  ) : (
    <div className="hero-details">
      <img src={hero.images.sm} alt={hero.name} />
      <div className="hero-card-info">
        <h2>{hero.name}</h2>
        <div className="primary-title">
          <p>Publisher:</p>
          <p>{hero.biography.publisher}</p>
        </div>
        <div className="primary-title">
          <p>Full Name:</p>
          <p>{hero.biography.fullName}</p>
        </div>
        <div className="primary-title">
          <p>First Appearance:</p>
          <p>{hero.biography.firstAppearance}</p>
        </div>
        <div className="primary-title">
          <p>Alignment: </p>
          <p>{hero.biography.alignment}</p>
        </div>
        <div className="primary-title">
          <p>Race: </p>
          <p>{hero.appearance.race}</p>
        </div>
        <div className="primary-title">
          <p>Groups: </p>
          <p>{hero.connections.groupAffiliation}</p>
        </div>
        <div className="primary-title">
          <p>Works: </p>
          <p>{hero.work.occupation}</p>
        </div>
        <div className="hero-powers">
          {Object.entries(hero.powerstats).map((key) => (
            <p key={key[0]}>
              {key[0].charAt(0).toUpperCase() + key[0].slice(1)}: {key[1]}
            </p>
          ))}
        </div>
        <Link to="/">
            <HiArrowLeft size={90}/>
        </Link>
      </div>
    </div>
  );
};

