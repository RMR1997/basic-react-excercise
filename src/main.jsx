import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/error';
import LandingPage from './pages/landingPage';
import RegisterPage from './pages/register';
import HomePage from './pages/home';
import ProductDetail from './pages/detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>DASHBOARD PAGE</div>,
    errorElement: <ErrorPage/>
  },

  {
    path:"/landingPage",
    element: <LandingPage />
  },

  {
    path:"/registerPage",
    element: <RegisterPage />
  },

  {
    path:"/homePage",
    element: <HomePage />
  },
  {
    path:"/productDetail",
    element: <ProductDetail />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
