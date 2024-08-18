import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // Ensure this is imported
import { store } from './app/store.js'; // Ensure the store is imported
import Blogs from './components/blogs/Blogs.jsx';
import AddBlogs from './components/blogs/AddBlogs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='/blogs' element={<><AddBlogs /><Blogs /></>} />
    </>
  )
);

const Root = () => {
  return (
    <Provider store={store}> {/* Wrap the RouterProvider with Provider */}
      <RouterProvider router={router} />
    </Provider>
  );
};

createRoot(document.getElementById('root')).render(<Root />);
