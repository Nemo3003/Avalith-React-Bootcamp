import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 10,
    type: 'aaa'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{           
            state.value += 1            
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementBy: (state, action) => {
            console.log(action);
            state.value += action.payload
        }
            
    }
})

export const { increment, incrementBy, decrement } = counterSlice.actions;

export default counterSlice.reducer;