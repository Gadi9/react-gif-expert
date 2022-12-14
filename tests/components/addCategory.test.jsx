import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory() />', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'Saitama' } });

        expect ( input.value ).toBe( 'Saitama' )

        //screen.debug();
    }); 

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Saitama';
        //Mock de la llamada a la funcion.
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        
        // Al hacer submit el campo se limpia por eso esperamos un valor vacío.
        expect ( input.value ).toBe( '' );

        // Comprueba si la funcion ha sido llamada
        expect ( onNewCategory ).toHaveBeenCalled();
        // Comprobamos que solo se llama una vez
        expect ( onNewCategory ).toHaveBeenCalledTimes(1);
        // Comprobamos que haya sido llamada con el valor de la caja de texto
        expect ( onNewCategory ).toHaveBeenCalledWith( inputValue );
        
        //screen.debug();

    });


    test('No debe de llamar el onNewCategory si el input esta vacio', () => {  

        
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect ( onNewCategory ).toHaveBeenCalledTimes( 0 );
        expect ( onNewCategory ).not.toHaveBeenCalled();

    });
});