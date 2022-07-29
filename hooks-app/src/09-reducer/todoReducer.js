import React from 'react'

const todoReducer = (initialState=[], action) => {
  switch(action.type){
    case 'ADD_TODO':
        return [...initialState, action.payload]
    default:
        return initialState;
  }
}

export default todoReducer