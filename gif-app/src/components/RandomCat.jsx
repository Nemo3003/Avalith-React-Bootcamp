
//Make an array with different random categories
const categories = ['One Punch', 'Samurai X', 'Dragon Ball', 'One Piece', 'Naruto', 'Bleach', 'Attack on Titan', 
'Death Note', 'Fullmetal Alchemist', 'HunterXHunter', 'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan',
 'Death Note', 'Fullmetal Alchemist', 'HunterXHunter', 'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan', 
 'Death Note', 'Fullmetal Alchemist', 'HunterXHunter', 'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan', 'Death Note',
  'Fullmetal Alchemist', 'HunterXHunter', 'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan', 'Death Note', 'Fullmetal Alchemist',
   'HunterXHunter', 'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan', 'Death Note', 'Fullmetal Alchemist', 'HunterXHunter',
    'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan', 'Death Note', 'Fullmetal Alchemist', 'HunterXHunter', 'One Piece', 'Dragon Ball',
     'Naruto', 'Bleach', 'Attack on Titan', 'Death Note', 'Fullmetal Alchemist', 
'HunterXHunter', 'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan', 'Death Note', 
'Fullmetal Alchemist', 'HunterXHunter', 'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan',
 'Death Note', 'Fullmetal Alchemist', 'HunterXHunter', 'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 
 'Attack on Titan', 'Death Note', 'Fullmetal Alchemist', 'HunterXHunter', 'One Piece', 'Dragon Ball',
  'Naruto', 'Bleach', 'Attack on Titan', 'Death Note', 'Fullmetal Alchemist', 'HunterXHunter', 'One Piece',
   'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan', 'Death Note', 'Fullmetal Alchemist', 'HunterXHunter', 
   'One Piece', 'Dragon Ball', 'Naruto', 'Bleach', 'Attack on Titan', 'Death Note', 'Fullmetal Alchemist', 'Hunter'];

//Select one random index from the array
const randomIndex = Math.floor(Math.random() * categories.length);
export const AddRanCategory = (randomIndex) =>{

    const [inputValue,setInputValue] = useState('');

    const handleInputChange = ({ target }) =>{
        setInputValue(target.value);
        
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length < 1) return;
        
        addCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Buscar Gif'
                onChange={handleInputChange}
                
            />
        </form>
        <button class="button-30" role="button" onClick={handleReset}>Reset</button>

        </>
    )
}