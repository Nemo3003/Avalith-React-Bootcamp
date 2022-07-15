import { GifApp } from "./GifApp";
import { renderHook, act } from "@testing-library/react";
//Verificar cambio en el estado de categorías, cuando se ejecuta la función handleAddCategory.
describe('Testing the main component GifApp', () => {

    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook(() => GifApp());
        expect(result.current.categorias).toEqual([]);
    })

    test('Debe agregar una categoría', () => {
        const { result } = renderHook(() => GifApp());
        act(() => {
            result.current.handleAddCategory('One Punch');
        }
        )
        expect(result.current.categorias).toEqual(['One Punch']);
    })
});
    
