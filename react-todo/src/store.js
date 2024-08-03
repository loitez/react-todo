import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import {mainPageReducer, todoReducer} from "./reducers";

const reducer = combineReducers({
    mainPageState: mainPageReducer,
    todoState: todoReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));