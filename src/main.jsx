import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // Ensure Tailwind CSS is imported here
import { store } from './app/store.js';
import Blogs from './components/blogs/Blogs.jsx';
import AddBlogs from './components/blogs/AddBlogs.jsx';
import Sidebar from './components/chat/sidebar/Sidebar.jsx';
import Chat1 from './components/chat/Chat.jsx';

const Root = () => {
  const currentTheme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return <RouterProvider router={router} />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App/>} />
      <Route path='/chat' element={<Chat1/>} />
      <Route path='/blogs' element={<><AddBlogs /><Blogs /></>} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Root />
  </Provider>
);
