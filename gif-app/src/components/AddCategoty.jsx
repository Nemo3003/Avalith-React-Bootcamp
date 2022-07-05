import { useState } from 'react'

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
        <button class="button-30" role="button" onClick={handleReset}>Reset</button>

        </>
    )
}
