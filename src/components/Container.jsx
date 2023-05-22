

import React from 'react'
import Card from './Card'
import Btn_Solicitud from './Btn_Solicitud'
import './Container.css'


const Container = () => {
  return (
    <div class="container w-50">
      <div class="row border-bottom">
        <div class="col-12">
          <h1 class="text-center text-white fs-10 font-custom">Solicitud
          </h1>
        </div>
      </div>
        <Btn_Solicitud />
      <div id="seccion-solicitudes">
            <Card />
      </div>
    </div>
  )
}

export default Container

