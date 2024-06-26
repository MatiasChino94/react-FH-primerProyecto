import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//le estamos diciendo que haga un mock completo de este pad
jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en <GifGrid/>', () => {

    const category = 'One Punch';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid categoria={ category } />);
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        expect( screen.getByText( category) );
    });

    test('debe de mostar items cuando se carga las imagenes useFechtGifs', ()=>{

        //hacer un mock completo de un custom hook

        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]
        

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid categoria={ category } />);

        expect( screen.getAllByRole('img').length).toBe(2);

    });
});