import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    /*
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
    }

    useEffect( () => {
        getImages();
    }, [] )
    */

    return (
    <>
        <h3>{ category }</h3>
        {
            /*
            isLoading 
            ? ( <h2 >Cargando...</h2> ) 
            : null
            */
           isLoading && ( <h2 >Cargando...</h2> )
        }


        <div className="card-grid">
            {/* images.map... */}
            {/*
            { images.map ( image => (
                <li key={ image.id }>{ image.title}</li>
                ))
            }
            */}
            { images.map( ( image ) => (
                <GifItem 
                    key={ image.id } 
                    //Esparcimos las properties
                    {...image}
                />
                ))
            }
        </div>
    </>
  )
}
