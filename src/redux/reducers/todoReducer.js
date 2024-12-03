// Define initial state
const initialState = {
    todos: [],
  };
  
  // Define action types
  const ADD_TODO = "ADD_TODO";
  
  // Reducer function
  const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
        };
  
      default:
        return state;
    }
  };
  
  export default TodoReducer;
  