import { configureStore } from '@reduxjs/toolkit';
import blogSlice from '../features/blogs/blogSlice';
import themeSlice from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    blogs: blogSlice,
    theme: themeSlice,
  },
});
