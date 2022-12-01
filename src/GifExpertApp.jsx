import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Dragon Ball' ]);

  const onAddCategory = (newCategory) =>{
    //Valorant
    //console.log('Valorant');
    //... Desectructuracion de categories
    //setCategories( [ ...categories, 'Valorant'] );
    //setCategories( [ 'Valorant', ...categories] );

    // Si ya existe la categoria no hace nada
    if ( categories.includes(newCategory) ) return; 

    setCategories( [ newCategory, ...categories] );
    //setCategories( cat => [ ...cat, 'Valorant' ] );
  };
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
          //onNewCategory={ (value) => onAddCategory(value) }
          onNewCategory={ onAddCategory }
        />

        { categories.map ( category => (
              <GifGrid 
                key={ category } 
                category={ category }/>
            )) 
        }
    </>
  )
}
