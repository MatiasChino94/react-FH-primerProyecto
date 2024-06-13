import { getGifs } from '../../src/helpers/GetGif';

describe('Purebas en GetGifs()', () => {

    test('debe retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One Punch');
        //console.log(gifs);

        //lo que espero es un arreglo con un largo mas grande que 0, perfecto, pero no estoy controlando como vine constituido ese arraglo de objetos 
        expect(gifs.length).toBeGreaterThan( 0 );

        //lo que espero con esto es tomar el primer objeto del array para ver como viene y si cumple con la estructa que se detalla 
        expect(gifs[0]).toEqual({
            id: expect.any(String),//espero que me devulva un string 
            title: expect.any(String),
            url: expect.any(String),
        })

        //tambien puede ser de la siguiente, que espero que contenga las siguientes propiedades ese objeto 
        expect(gifs[0]).toHaveProperty('id', 'title', 'url');
    




    });
});
