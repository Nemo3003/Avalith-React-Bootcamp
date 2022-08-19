import { types } from "../types/types";

export const heroesReducer = (state = {}, action:any) => {
  if(action.type === types.fetch) {
    return {
      ...state,
      heroes: action.payload,
      loading: false,};}

  if(action.type === types.actualPublisher) {
    return {
      ...state,
      actualPublisher: action.payload,
    };}

  if(action.type === types.name) {
    return {
      ...state,
      nameSearch: action.payload,
    };}

  if(action.type === types.heroId) {
    return {
      ...state,
      heroId: action.payload,
    };}
    
  return state;

  }
