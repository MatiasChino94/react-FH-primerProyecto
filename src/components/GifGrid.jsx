
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes  from "prop-types";



export const GifGrid = ({ categoria }) => {

    //Custom Hooks
    const { images, isLoading } = useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>
                {
                    isLoading && ( <h2>Cargando...</h2> )
                }

            <div className='card-grid'>
                {
                    images.map((image) => {
                        return <GifItem 
                            key={ image.id }
                            //exparsir las propiedades  
                            {...image}
                            //o esta manera
                            // title={image.title} 
                            // url={image.url}  
                        />
                    })
                }
            </div>
        </>
    )
}


GifGrid.propType = {
    categoria: PropTypes.string.isRequired,
}