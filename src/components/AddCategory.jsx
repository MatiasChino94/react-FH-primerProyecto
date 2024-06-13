import { useState } from 'react';
import Proptypes from "prop-types";


export const AddCategory = ({ onNewValue }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return;

        //setCategorias( (categorias) => [inputValue, ...categorias]);

        onNewValue(inputValue.trim());

        setInputValue('');
    }
 
    return (
        <form onSubmit={(event) => onSubmit(event) } aria-label='form'>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewValue: Proptypes.func.isRequired, 
}