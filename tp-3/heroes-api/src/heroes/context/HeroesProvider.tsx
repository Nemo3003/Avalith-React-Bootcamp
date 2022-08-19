import { useReducer } from "react";
import { useFetch } from "../../hooks/useFetch";
import { types } from "../types/types";
import { FetchHeroes } from "./FetchHeroes";
import { heroesReducer } from "./HeroesReducer";
import { getAllPublishers } from "../helpers/getAllPublishers";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { useMemo } from "react";
import { getHeroById } from "../helpers/getHeroById";

const initialState = {
  heroes: [],
  loading: true,
  actualPublisher: "ALL",
  nameSearch: "",
  heroId: null,
};

export const HeroesProvider = ({ children }:any) => {
  const [heroeState, dispatch] = useReducer(heroesReducer, initialState);

  const { heroes, loading, actualPublisher, nameSearch, heroId }:any = heroeState;

  const { dataArray }:any = useFetch(
    "https://akabab.github.io/superhero-api/api/all.json",
    dispatch,
    actualPublisher
  );

  const publishers = useMemo(() => {
    return getAllPublishers(dataArray);
  }, [dataArray]);

  const searchResults = useMemo(() => {
    return getHeroesByName(nameSearch, dataArray);
  }, [nameSearch]);

  const searchHeroId = useMemo(() => {
    return getHeroById(heroId, dataArray);
  }, [heroId, dataArray]);

  const handlePublisher = (publish:any) => {
    dispatch({ type: types.actualPublisher, payload: publish });
  };
  const handleSearchPage = (name :any ) => {
    dispatch({ type: types.name, payload: name } );
  };
  const handleHeroId = (id :any) => {
    dispatch({ type: types.heroId, payload: id });
  };

  return (
    <FetchHeroes.Provider
      value={{
        heroes,
        searchResults,
        searchHeroId,
        loading,
        publishers,
        actualPublisher,
        handlePublisher,
        handleSearchPage,
        handleHeroId,
      }}
    >
      {children}
    </FetchHeroes.Provider>
  );
};
