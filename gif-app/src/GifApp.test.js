import { GifApp, handleAddCategory, Button } from "./GifApp";
import { renderHook, act } from "@testing-library/react";

import { shallow } from 'enzyme';
//Verificar cambio en el estado de categorías, cuando se ejecuta la función handleAddCategory.
describe('Testing the main component GifApp', () => {

    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook(() => GifApp());
        const { categories } = result.current;
        expect(categories).toEqual(undefined);
    });
    it('Test click event', () => {
      const mockCallBack = jest.fn();
  
      const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
      button.find('button').simulate('click');
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
    
})
