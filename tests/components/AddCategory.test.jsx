import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategogy />', () => {

    test('debe de cambiar el valor de la caja de texto', () => { 
       
        //se crea el sujeto de prueba
        render(<AddCategory onNewValue={ () => {} } />);
        //extraemos el input
        const input = screen.getByRole('textbox');

        //disparamos el evento
        //le estamos agregando el valor al input
        fireEvent.input( input, { target: {value: 'Saitama'} } );

        
        expect(input.value).toBe('Saitama')

        //screen.debug();

    });

    test('debe de llamar onNewValue si el input tiene un valor', () => {

        
        //simulo el valor del input
        const inputValue = 'Saitama';

        //Mock
        const onNewValue = jest.fn();

        // TODO
        //se crea el sujeto de prueba
        render(<AddCategory onNewValue={ onNewValue } />);
        //referencia al input, extraemos el input
        const input = screen.getByRole('textbox');
        //referencia al formulario,hay que agregarle un aria-label al formulario para que lo encuentre
        const form = screen.getByRole('form');


         //disparamos el evento
        //le estamos agregando el valor al input
        fireEvent.input( input, { target: {value: inputValue} } );

        //disparamos el evento submit
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        //evaluando la funcion mook
        //esta evaluando si fue llamada la funcion
        expect(onNewValue).toHaveBeenCalled();

        //esta evaluando cuantas veces fue llamada la funcion
        expect(onNewValue).toHaveBeenCalledTimes(1);

        //esta evaluando si fue llamada con el valor 
        expect(onNewValue).toHaveBeenCalledWith(inputValue);



    });

    test('No debe de llamar el onNewValue si el input esta vacio', () => { 

        const onNewValue = jest.fn();
        render(<AddCategory onNewValue={ onNewValue } />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewValue).toHaveBeenCalledTimes(0);
        //o
        expect(onNewValue).not.toHaveBeenCalled();



    });


});
