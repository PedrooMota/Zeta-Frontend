import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle from '../styles/global'


// - Minhas rotas
import QuemSomos from '../routes/Quem-somos/Quem-somos';
import MissaoValores from '../routes/Missao-Valores/Missao-Valores';

import App from '../pages/App';

// - Configurando router
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import ErrorPage from '../routes/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>

  },
  {
    path: 'quem-somos',
    element: <QuemSomos/>
  },
  {
    path: 'missao-valores',
    element: <MissaoValores/>
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
        <GlobalStyle/>
        
  </React.StrictMode>,
)
