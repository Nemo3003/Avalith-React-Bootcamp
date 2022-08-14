import  React,{useState, useEffect} from "react"


export const FetchHeroes = ({ datas }: any) => {
    const [Heroes, setHeroes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        const FetchData = async ()=>{
            const response = await fetch(`https://akabab.github.io/superhero-api/api/${datas}.json`);
            const data = await response.json();
            //Show only 20 heroes
            setHeroes(data.slice(0,20));
            setLoading(false);
        };
        FetchData();

    }, []);

    
    return loading? (<p>Loading...</p>) : (
        <div>
            <h1>Super Heroes</h1>
            <ul>
                {Heroes.map(hero => (
                    <div>
                    <h2>{hero.name}</h2>
                    <p>First Appearance : {hero.biography.firstAppearance}</p>
                    <p>Publisher : {hero.biography.publisher}</p>
                    <p>Alignment: {hero.biography.alignment}</p>
                    
                    </div>
                ))}
            </ul>
             {/**Filter by publisher */
                
        }
           
            
        </div>
    )
}