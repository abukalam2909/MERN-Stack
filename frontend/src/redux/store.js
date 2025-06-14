import { createStore, combineReducers, applyMiddleware } from 'redux';
import productReducer from './reducers/productReducers.js';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;