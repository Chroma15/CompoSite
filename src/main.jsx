import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css'
import Homepage from './pages/Homepage';
import Book_A_Demo from './pages/Book_A_Demo';
import View_Demos from './pages/View_Demos';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/book-a-demo",
    element: <Book_A_Demo />,
  },
  {
    path: "/view-demos",
    element: <View_Demos />,
  },
]);

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
