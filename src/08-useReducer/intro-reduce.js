
const initialState= [{//TODO: estado inicial
    id: 1 ,
    todo: 'piedras del alma',
    done: false,
}];


const todoReduce = (state = initialState, action = {} )=>{
    //TODO:recibe estado para declarar una accion

    if( action.type === '[TODO] add todo' ){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReduce();



const newTodo = {
    id:2,
    todo: ' power',
    done: false
}

//sintaxis de acciones

const addTodoAction ={
    type:'[TODO] add todo',
    payload: newTodo,
}



todos = todoReduce ( todos, addTodoAction  );


console.log( {state: todos})

