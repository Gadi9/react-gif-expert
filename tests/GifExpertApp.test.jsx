import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

//Tarea
describe('Pruebas en <GifExpertApp />', () => { 
   
    test('Debe haber dos <h3> despues de buscar un resultado nuevo', () => { 

        render( <GifExpertApp /> )

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Goku' } } );
        fireEvent.submit( form );

        expect( screen.getByText('GifExpertApp') ).toBeTruthy();
        expect( screen.getAllByRole( 'heading', { level: 3 } ).length ).toBe(2)

    });

});