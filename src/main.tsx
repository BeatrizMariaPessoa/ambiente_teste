import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Componente2 from './componentes/componente2.tsx'
import Componente3 from './componentes/componente3.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/componente2', element: <Componente2 />},
  { path: '/componente3', element: <Componente3 /> }
]);

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <nav>
      <ol>
        <li><a href='/'>Componente 1</a></li>
        <li><a href='/componente2'>Componente 2</a></li>
        <li><a href='/componente3'>Componente 3</a></li>
      </ol>
    </nav>
    <RouterProvider router={router} />
  </StrictMode>,
)
