import {configureStore} from '@reduxjs/toolkit'
import blogSlice from '../features/blogs/blogSlice';

export const store=configureStore({
    reducer:blogSlice
});