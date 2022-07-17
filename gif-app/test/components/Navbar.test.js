import {Navbar} from '../../src/components/Navbar';
import renderer from 'react-test-renderer';
import { render,screen,fireEvent } from "@testing-library/react";

describe('Navbar', () => {
    test('Debe coincidir con el snapshot', () => {
        const {container} = render(<Navbar/>)

        expect (container).toMatchSnapshot();
        
    })});