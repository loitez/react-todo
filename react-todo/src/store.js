import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import {mainPageReducer} from "./reducers";

const reducer = combineReducers({
    mainPageState: mainPageReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));