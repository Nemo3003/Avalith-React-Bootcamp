import { GifApp, handleAddCategory, Button, handleReset } from "./GifApp";

import { renderHook, act } from "@testing-library/react";

import { shallow } from 'enzyme';
//Verificar cambio en el estado de categorías, cuando se ejecuta la función handleAddCategory.
describe('Testing the main component GifApp', () => {

    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook(() => GifApp());
        const { categories } = result.current;
        expect(categories).toEqual(undefined);
    });
    /*test('Verificar el cambio de estado de categorias', () => {
      const { categories } = 'Goku';
      expect(categories).toContain('Goku');

    });*/

    //The reset function
    test('Al hacer click, el handleReset debe de recargar la pagina', () => {
      const handleReset = function() {
        window.location.reload();
        handleReset.call = jest.fn();
        expect(handleReset.call).toHaveBeenCalledTimes(1);
}});
    //The addCategory function
    test('Al hacer click, el handleAddCategory debe de agregar una categoria', () => {
      const handleAddCategory = function() {
        handleAddCategory.call = jest.fn()
        expect(handleAddCategory.call).toHaveBeenCalledTimes(1);
}});
    test('Al hacer click, el handleDelete debe de elimnar una categoria', () => {
      const handleDelete = function() {
        handleDelete.call = jest.fn()
        expect(handleDelete.call).toHaveBeenCalledTimes(1);
}});
  
});
