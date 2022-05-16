import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentReducer';
import imageReducer from './imageReducer';


const rootReducer = combineReducers({
    content: contentReducer,
    images: imageReducer
});

const store = configureStore({
    reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default store;