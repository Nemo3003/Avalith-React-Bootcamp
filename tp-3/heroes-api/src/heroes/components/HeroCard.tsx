import React from "react";
import { Link } from "react-router-dom"; 
import "../scss/heroes.css";


export const HeroCard = ({ id, name, images, slug, biography }:any) => {
  const { lg } = images;
  const { fullName, publisher } = biography;

  return (
    <li className="card_container_one ">
      <div className="card__header">
      <Link to={`/hero/${id}`}>
        <img src={lg} alt={name}></img>
      </Link>
      </div>
      <div className="card_information">
        <h2>{name}</h2>
        <h4>{publisher}</h4>
        <h5>{fullName}</h5>

        <Link to={`/hero/${id}`} className="btn btn-blue">
          LEARN MORE
        </Link>
      </div>
    </li>
  );
};
