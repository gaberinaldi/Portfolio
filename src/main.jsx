import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'
import Home from './pages/Home'
import Contact from './pages/Contact';
import Projects from './pages/Projects';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
);
