import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchHeroes } from "../context/FetchHeroes";
import "../scss/heroes.css";

export const HeroPage = () => {
  const { handleHeroId, searchHeroId }:any = useContext(FetchHeroes);
  const { heroId } = useParams();

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    handleHeroId(heroId);
  }, [heroId]);

  if (searchHeroId) {
    const {
      name,
      slug,
      powerstats,
      appearance,
      biography,
      work,
      connections,
      images,
    } = searchHeroId;
    return (
      <>
      <section className="hero_container">
       
      <div className="hero_container_upper">
        <article className="hero-information">
            <div>
            <b>Slug: </b>
              {slug} <br />
              <b>PowerStats: </b>
              <p>Intelligence: {powerstats.intelligence}</p>
              <p>Strength: {powerstats.strength}</p>
              <p>Speed: {powerstats.speed}</p>
              <p>Durability: {powerstats.durability}</p>
              <p>Power: {powerstats.power}</p>
              <p>Combat: {powerstats.combat}</p>
           
            </div>
            <hr />
            <div>
           
              <b>Appearance: </b>
              <p>Gender: {appearance.gender}</p>
              <p>Race: {appearance.race}</p>
              <p>Height: {appearance.height[1]}</p>
              <p>Weight: {appearance.weight[1]}</p>
              <p>Eye color: {appearance.eyeColor}</p>
              <p>Hair color: {appearance.hairColor}</p>
            
            </div>
            <div>
          <h3>{name}</h3>
          <img
              src={images.md}
              alt={name}
              className="img-list"
            />
            </div>
            <hr />
            <div>
              <b>Biography: </b>
              <p>Fullname: {biography.fullName}</p>
              <p>Alter egos: {biography.alterEgos}</p>
              <p>Place Of Birth: {biography.placeOfBirth}</p>
              <p>First Appearance: {biography.firstAppearance}</p>
              <p>Publisher: {biography.publisher}</p>
              <p>Alignment: {biography.alignment}</p>
            
            </div>
            <hr />
            <div>
           
              <b>Works: </b>
              <p>Occupation: {work.occupation}</p>
              <p>Base: {work.base}</p>
            
            </div>
            <hr />
              <b>Connections: </b>
              <p>Group Affiliation: {connections.groupAffiliation}</p>
              <p>Relatives: {connections.relatives}</p>
              <hr />

            
        
         
          
        </article>
        </div>
      </section>
      <footer>
      <button onClick={onNavigateBack}>Back...</button>
      </footer>
      </>
    );
  }
};
