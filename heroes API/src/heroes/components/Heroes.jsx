import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

export const Heroes = ({ hero }) => {
  return (
    
    <div className="card">
      <LazyLoad offset={1200}>
        <img src={hero.images.lg} alt={hero.name} />
      </LazyLoad>
      <div className="info">
        <h1>{hero.name}</h1>
        <p>First Appearance : {hero.biography.firstAppearance}</p>
        <p>Publisher : {hero.biography.publisher}</p>
        <p>Alignment: {hero.biography.alignment}</p>
        <Link to={`/details/${hero.id}`} className="btn">
          Read More
        </Link>
      </div>
    </div>
  );
};