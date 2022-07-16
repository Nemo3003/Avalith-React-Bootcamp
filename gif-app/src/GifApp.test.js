import { GifApp, handleAddCategory,handleReset } from "./GifApp";
import { renderHook, act } from "@testing-library/react";
//Verificar cambio en el estado de categorías, cuando se ejecuta la función handleAddCategory.
describe('Testing the main component GifApp', () => {

    test('Debe retornar el estado inicial', () => {
        const {result} = renderHook(()=>GifApp('One punch'));
        expect(result.current.categories).toBeTruthy();
    });
    test ('Debe de verificar el cambio en el estado inicial', () => {
        const {result} = renderHook(()=>GifApp('One punch'));
        act(()=>{
            result.current.handleAddCategory('One punch');
        }
        )
        expect(result.current.categories).toEqual(['One punch']);
    });

    
}),
describe('refreshPage', () => {
    const { reload } = window.location;

    beforeAll(() => {
      Object.defineProperty(window, 'location', {
        writable: true,
        value: { reload: jest.fn() },
      });
    });

    afterAll(() => {
      window.location.reload = reload;
    });

    it('reloads the window', () => {
      handleReset();
      expect(window.location.reload).toHaveBeenCalled();
    });
  });
    
