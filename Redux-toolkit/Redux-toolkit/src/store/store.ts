import {configureStore } from '@reduxjs/toolkit';
import  counterSlice  from './slices/counter/counterSlice';


export const store= configureStore(<any>{
    reducer: {
        counter: counterSlice}
})
