import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import About from './pages/About';
import Course from './pages/Course';
import Project from './pages/Project';
import Contact from './pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createHashRouter(
[
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/course',
    element: <Course />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]

);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
