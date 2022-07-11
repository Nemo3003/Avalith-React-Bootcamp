import { render,screen,fireEvent } from "@testing-library/react";
import {AddCategory} from "../../src/components/AddCategory";

describe('Test en <addCategory/>', () => {

    test('Debe cambiar el valor del input', () => {

        render(<AddCategory addCategory={() => {}}/>);
        //screen.debug()

        const input = screen.getByRole('textbox');

        fireEvent.change(input,{target: {value: 'Goku'}});

        expect (input.value).toBe('Goku');
    })
    test ('Debe llamar la funcion addCategory si el input tiene valor',()=>{

        const inputValue = 'Goku';
        const AddCategory = jest.fn();
        render(<AddCategory addCategory={addCategory}/>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        screen.debug();

        expect(input.value).toBe('');
        expect(addCategory).toHaveBeenCalled();
        expect(addCategory).toHaveBeenCalledTimes(2);
        expect(addCategory).toHaveBeenCalledWith(inputValue);

    })

})