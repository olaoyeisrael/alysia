import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx'
import Book from './Book.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
   {
    path: '/book',
    element: <Book/>
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
