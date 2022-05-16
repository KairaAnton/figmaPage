import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './contentReducer';
import imageReducer from './imageReducer';


const store = configureStore({
    reducer: {
        content: contentReducer,
        images: imageReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;