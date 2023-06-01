import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PuntosDonacion from './views/PuntosDonacion.jsx'
import Login from './views/Login.jsx'
import Register from './views/Register.jsx'
import PasswordRecovery from './views/PasswordRecovery.jsx'
import Certificates from './views/Certificates.jsx'
import NewCertificate from './views/NewCertificate.jsx'
import Perfil from './views/Perfil.jsx'
import Container from './components/Container.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='punto-donacion' element={<PuntosDonacion />} />
      <Route path='login' element={<Login />} />
      <Route path='registrarse' element={<Register />} />
      <Route path='recuperar-password' element={<PasswordRecovery/>} />
      <Route path='certificados' element={<Certificates/>} />
      <Route path='certificado-solicitud' element={<NewCertificate />} />
      <Route path='perfil' element={<Perfil />} />
      <Route path='solicitudes' element={<Container />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
