import {getSaludo,getUser} from './functions'

describe('Test demo', ()=>{

     test('Numero Igual', ()=>{
        expect(1===1).toBe(true);
     });

     test('Mensaje igual', ()=>{
        //Arrange - inicio
        const message1 = 'Hola';
        //Act - acciones
        const message2 = message1.trim()
        //assert - observar
        expect(message1).toBe(message2);
    });

    test('test 3 - getSaludo', ()=>{
        const nombre = 'Beto';

        const message = getSaludo(nombre);

        expect(message).toBe(`${nombre}Hola`);
    });

    test('test 4 - getUser', ()=>{
        const user = getUser();

        expect(user).toEqual({
            uid:'ABC123',
            username:'Beto'
        });
    })

});