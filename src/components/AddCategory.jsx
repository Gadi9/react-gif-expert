import { useState } from 'react'

//export const AddCategory = ( { setCategories } ) => {
export const AddCategory = ( { onNewCategory } ) => {  

    const [ inputValue, setInputValue ] = useState( 'One Punch' )

    /*
    const onInputChange = (event) => {
        console.log( event.target.value );
        setInputValue( event.target.value );
    }
    */

    const onInputChange = ( {target } ) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log( inputValue );
        const newInputValue = inputValue.trim()
        //Si hay 1 caracter o menos no inserta
        if ( newInputValue.length <= 1 ) return;
        //setCategories( categories => [ inputValue, ...categories ] );
        // Para que se borre cada vez que doy a enter el input
        setInputValue('');
        onNewCategory( newInputValue )
    }

    return (
        //<form onSubmit={ (event) => onSubmit(event) }>
        //Porque devuelve el mismo elemento (event) que utiliza la funcion
        <form onSubmit={ onSubmit }>
            <input
                text="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                //onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>

  )
}
