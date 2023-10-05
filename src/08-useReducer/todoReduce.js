

export const todoReducer = (initState = [] , action) =>{

    switch (action.type) {
        case 'ABC':
            throw new Error('action .type = ABC no esta implementada');
            
    
        default:
            return initState;;
    }
}