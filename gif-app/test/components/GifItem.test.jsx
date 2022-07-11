import { render } from "@testing-library/react";
import {GifItem} from "../../src/components/GifItem";

describe('Test en <GifItem/>', () => {

    const title = 'Dragon Ball';
    const url = 'https://dragon-ball.com/goku.jpg';
    test('Debe coincidir con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>)

        expect (container).toMatchSnapshot();
        
    })
    test ('Debe encontrar un texto', () => {
        const {getByText} = render(<GifItem title={title} url={url}/>)

        expect(getByText(title)).toBeTruthy();
    })

});