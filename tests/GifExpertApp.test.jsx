import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

//Tarea
describe('Pruebas en <GifExpertApp />', () => { 
   
    test('should first', () => { 

        render( <GifExpertApp /> )
        screen.debug();

    });

});