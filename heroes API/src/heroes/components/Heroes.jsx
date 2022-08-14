import React from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import "../../styles/styles.css"

export const Heroes = ({ hero }) => {
  return (
    <>
    <div className="card small-card">
      <LazyLoad offset={300}>
        <img className="image-main" src={hero.images.lg} alt={hero.name} />
      </LazyLoad>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        <h1>{hero.name}</h1>
        <p>First Appearance : {hero.biography.firstAppearance}</p>
        <p>Publisher : {hero.biography.publisher}</p>
        <p>Alignment: {hero.biography.alignment}</p>
        <Link to={`/details/${hero.id}`} className="btn">
          Read More
        </Link>
      </div>
    </div>
    </>
  );
};