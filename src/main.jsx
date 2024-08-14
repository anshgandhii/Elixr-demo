import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import {Provider} from 'react-redux'
import {store} from './app/store.js'
import Blogs from './components/Blogs/Blogs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App/>} />
      <Route path='/blogs' element={<Blogs/>} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
