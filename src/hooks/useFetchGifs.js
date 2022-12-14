import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }
    useEffect( () => {
        getImages();
    }, [] )

    return {
        //images: images,
        // Podemos dejarlo asi porque la propiedad tiene el mismo nombre
        images,
        //isLoading: true
        // Podemos dejarlo asi porque la propiedad tiene el mismo nombre
        isLoading
    }
}
