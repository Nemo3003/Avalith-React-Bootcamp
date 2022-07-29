console.log('Hello World');

const initialState = [{
    id: 1,
    todo: 'Llamar a pepe',
    done: false
}]

const todoReducer = (state = initialState, action={}) => {
    
    if(action.type === 'ADD_TODO') return [...state, action.payload]
    
    return state;
}

let todos = todoReducer();

console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Ver capitulo 22',
    done: false
}

const addTodoAction = {
    type : 'ADD_TODO',
    payload: newTodo
}

todos = todoReducer(todos, addTodoAction);

console.log({state: todos});