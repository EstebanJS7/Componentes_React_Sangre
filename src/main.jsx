import React from 'react'
import ReactDOM from 'react-dom/client'
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
import NewRequest from './views/NewRequest.jsx'
import PerfilEdit from './views/PerfilEdit.jsx'
import PassEdit from './views/PassEdit.jsx'
import { Provider } from 'react-redux'
import { persistor, store } from './store/index.js'
import { PersistGate } from 'redux-persist/integration/react'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='punto-donacion' element={<PuntosDonacion />} />
      <Route path='login' element={<Login />} />
      <Route path='registrarse' element={<Register />} />
      <Route path='recuperar-password' element={<PasswordRecovery />} />
      <Route path='certificados' element={<Certificates />} />
      <Route path='certificado-solicitud' element={<NewCertificate />} />
      <Route path='perfil' element={<Perfil />} />
      <Route path='solicitudes' element={<Container />} />
      <Route path='nueva-solicitud' element={<NewRequest />} />
      <Route path='editar-perfil' element={<PerfilEdit />} />
      <Route path='cambiar-pass' element={<PassEdit />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
