export const getHeroById = (heroId:any, arr:any) => {
    return (
      arr.find((hero:any) => 
      hero.id === parseInt(heroId)));
  };
  