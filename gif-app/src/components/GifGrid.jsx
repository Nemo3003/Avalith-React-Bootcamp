import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import styles from '../css/styles.css';

export const GifGrid = ({category}) => {

  const {imagenes, loading} = useFetchGif(category);
  //get a random number from 1 to 10

  
  return (
    <>
        <h3>{category}</h3>     
        
        <button onClick={console.log("deletion in progress...")}>Delete Category</button>    
        <div className="card-grid">
          {
            loading ? <h2>Loading...</h2> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
            
          }
 
          
        </div>     
            
    </>
  )
}
