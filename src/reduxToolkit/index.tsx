import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentReducer';


const rootReducer = combineReducers({
    content: contentReducer
});

const store = configureStore({
    reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default store;