import { configureStore } from '@reduxjs/toolkit';
import markdownSlice from './markdownStore';

const store = configureStore({
    reducer: {
        markdown: markdownSlice.reducer
    }
});

export default store;