import { useState } from "react"
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState([]);

    const onAgregarCategoria = (newCategory) => {

        if (categorias.includes(newCategory)) return;

        setCategorias([newCategory, ...categorias]);
        //otra manera
        //setCategorias(cat => [...cat, 'Valorant']);
    }

    return (
        <>

            <h2>Gif Expert App</h2>

            <AddCategory
                onNewValue={onAgregarCategoria}
            />


            {
                categorias.map(categoria => {
                    return (
                        <GifGrid
                            key={categoria}
                            categoria={categoria}
                        />
                    )
                })
            }


        </>
    )
}
