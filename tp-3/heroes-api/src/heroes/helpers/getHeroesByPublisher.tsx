import Swal from 'sweetalert2';

export const getHeroesByPublishers = (publisher:String, arr:any[]) => {
    if (publisher === "all" || publisher === "") {
      return arr;
    } else {
      const finalArray = arr.filter(
        (hero) => hero.biography.publisher === publisher
      );
  
      if (finalArray) {
        return finalArray;} }}