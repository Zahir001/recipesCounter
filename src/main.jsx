import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './assets/css/index.css'
import './assets/css/sidebar.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './routes/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children:[
      {path:'/', element:<Home />},
      {path:'/recipe/:id', element: <Home />}
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
