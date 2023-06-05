


import Card from './Card'
import ButtonForms from './ButtonForms'
import Check from './Check'
import { useState } from 'react';


const Container = () => {
  const [datos, setDatos] = useState(null);

  return (
    <div className="container w-75 mb-2 p-2">
      <h1 className="text-center text-blac fs-10 font-custom">Solicitud
      </h1>
      <hr />
      <div className='d-flex justify-content-between align-items-center m-3'>

        <Check texto={'Mis Solicitudes'} setDatos={setDatos}/>

        <ButtonForms transparent={false} link='/nueva-solicitud' background="#1c74e4" textColor="white" showSymbol={true} symbolPosition="left" icon="bi bi-plus" border={false} disabled={false} height='60px' width="200px">
          New Solicitud
        </ButtonForms>

      </div>
      <div id="seccion-solicitudes">
        <Card datos={datos} setDatos={setDatos}/>
      </div>
    </div>
  )
}

export default Container

