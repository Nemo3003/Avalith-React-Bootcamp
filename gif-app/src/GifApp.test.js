import { GifApp, handleAddCategory, Button, handleReset } from "./GifApp";
import { renderHook, act } from "@testing-library/react";
import { render,screen,fireEvent } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { AddCategory } from "./components/AddCategoty";

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
test('El estado cambio', () => {
    const tree = renderer
      .create(<AddCategory />)
      .toJSON();
    
  render(<AddCategory addCategory={() => {}}/>);
  //screen.debug()

  const input = screen.getByRole('textbox');

  fireEvent.change(input,{target: {value: 'Goku'}});

  //expect (input.value).toBe('Goku');
  expect(tree).toMatchSnapshot();

})
    test('Al hacer click, el handleDelete debe de renderizarse', () => {
      const handleDelete = function() {
        handleDelete.call = jest.fn()
        expect(handleDelete.call).toHaveBeenCalledTimes(1);
}});
test('Una categoria es eliminada por el handleRemotion', () => {
  const { result } = renderHook(() => GifApp());
  const { categories } = result.current;
  expect(categories).toEqual(undefined);
});
  
test('Colores son distintos de dia y de noche', () => {
  //const day = screen.getByRole('body');
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  })
  const daily = wrapper.find('body')
  const time = new Date().getHours();
  if (time < 18) {
    expect(daily).toHaveStyle('background-color: #AAAAAA');
  } else {
    expect(daily).toHaveStyle('background-color: #DDDDDD');
  }
})
});