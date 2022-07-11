import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";
import '../css/large.css';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

  const {imagenes, loading} = useFetchGif(category);
  //get a random number from 1 to 10

  
  return (
    <>
        <h3>{category}</h3>     
        
        <div className="card-grid">
          {
            loading ? <h2>Loading...</h2> :
            imagenes.map(imagen => <GifItem key={imagen.id} {...imagen} />)
            
          }
 
          
        </div>     
            
    </>
  )
}
GifGrid.protoTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
