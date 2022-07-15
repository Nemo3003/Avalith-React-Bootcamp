import {renderHook, waitFor} from '@testing-library/react';
import {useFetchGif} from '../../src/hooks/useFetchGif';
describe('test en hook', ()=>{
    
    test('Debe regresar al estado inicial', ()=>{
        
        const {result} = renderHook(()=>useFetchGif('One Punch'));
        
        console.log(result)
        //test that the initial state is the corresponding one
        expect(result.current.loading).toBe(true);
        expect(result.current.imagenes).toEqual([]);
    })
    test('Debe retornar un arreglo de imagenes y el laoding en false', async()=>
    {
        const {result} = renderHook(()=>useFetchGif('One Punch'));

        await waitFor(
            ()=> expect(result.current.imagenes.length).toBeGreaterThan(0),{
                timeout:3000
            }
        )
        const {imagenes, loading}= result.current;
        expect(imagenes.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();
        /*const {loading,imagenes} = result.current;
        expect(loading).toBe(true);
        expect(imagenes).toEqual([]);*/
    })
})
