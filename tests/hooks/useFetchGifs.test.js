import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFecthGifs', () => {

    test('debe regresar el estado inicial', () => {
        //seria que retorne el array vacio en images y true en isLoading
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        //que devuelve
        //console.log(result);
        //desestructuramos y extraemos los valores
        const { images, isLoading } = result.current;

        //expect => espero que tal cosa
        //toBe => que ser '0'
        //tobeTruthy => que ser verdaero
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();


    });

    test('debe de retornar un arreglo de imagenes y el isLoading en false',async() => {
        
        const { result } = renderHook(() => useFetchGifs('One Punch'));

        //espera por =>
        await waitFor(
            () => expect( result.current.images.length).toBeGreaterThan(0)
            
        );

        const { images, isLoading } = result.current;

        expect( images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();



    });
});