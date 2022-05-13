import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentReducer';


const rootReducer = combineReducers({
    content: contentReducer
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;