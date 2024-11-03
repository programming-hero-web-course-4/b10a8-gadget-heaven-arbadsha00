import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Error from './components/Error';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Dashboard from './components/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children :[
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "/statistics",
        element : <Statistics></Statistics>
      },
      {
        path: "/Dashboard",
        element : <Dashboard></Dashboard>
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
