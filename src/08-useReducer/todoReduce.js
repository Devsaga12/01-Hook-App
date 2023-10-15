export const todoReducer = (initState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initState, action.payload];

    case "[TODO] Remove Todo":
      return initState.filter((todos) => todos.id !== action.payload);

    default:
      return initState;
  }
};
