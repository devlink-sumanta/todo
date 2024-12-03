import { combineReducers } from "redux"
import TodoReducer from "./reducers/todoReducer";

const reducers = combineReducers({
    todoReducer: TodoReducer
});

export default reducers