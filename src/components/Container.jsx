


import Card from './Card'
import './Container.css'
import ButtonForms from './ButtonForms'


const Container = () => {
  return (
    <div className="container w-75 mb-2 p-2">
      <div className="row border-bottom">
        <div className="col-12">
          <h1 className="text-center text-white fs-10 font-custom">Solicitud
          </h1>
        </div>
      </div> 
      <div className='row d-flex justify-content-center align-items-center mt-3'>
        <ButtonForms transparent={false} background="#1c74e4" textColor="white" showSymbol={true} symbolPosition="left" icon="bi bi-plus" border={false} disabled={false}  height='60px' width="200px">
             Mis Solicitudes
        </ButtonForms>
        </div>
      <div id="seccion-solicitudes">
            <Card />
            <Card />
      </div>
    </div>
  )
}

export default Container

