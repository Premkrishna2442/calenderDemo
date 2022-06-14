import {createStore,applyMiddleware} from 'redux';
import EventReducer from './eventReducer';
import thunk from 'redux-thunk'

const Store=createStore(EventReducer, applyMiddleware(thunk))

export default Store






