import { useState } from 'react'
import PropTypes from 'prop-types';

const handleReset = () => window.location.reload()

export const AddCategory = ({ addCategory }) =>{

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
                placeholder='Search a Gif'
                onChange={handleInputChange}
                
            />
        </form>
        <button className="button-30" role="button" onClick={handleReset}>Reset</button>

        </>
    )
}
AddCategory.propType ={
    addCategory: PropTypes.func.isRequired
}