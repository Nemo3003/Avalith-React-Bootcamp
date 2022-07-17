import { render,screen,fireEvent } from "@testing-library/react";
import {GifItem, handleGetImage} from "../../src/components/GifItem";

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

    test('Debe encontrar el test-id', () => {
        const {getByTestId} = render(<GifItem title={title} url={url}/>);

        expect(getByTestId('test-title').innerHTML).toContain(title);
    })

    test('Debe mostrar el url y el alt', ()=>{
        render(<GifItem title={title} url={url}/>);
        //screen.debug();
        /*expect(screen.getByRole('img').src).toContain(url);
        expect(screen.getByRole('img').alt).toContain('gif');*/

        const{src,alt}=screen.getByRole( 'img' );
        expect(src).toContain(url);
        expect(alt).toContain('gif');
    })
    /*const handleGetImage = () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = title;
        link.click();
    }*/
 

});