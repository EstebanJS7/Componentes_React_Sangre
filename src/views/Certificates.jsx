const Certificates = () => {
  return (
    <div className="container">
        <a className="btn btn-primary" href="./certificado-solicitud" role="button">+ Certificados</a>
      <div className="row justify-content-center mt-1">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Certificados</h3>
            </div>
            <div className="card-body">
              <p className="d-flex justify-content-between">
                <span>Establecimiento</span>
                <span> </span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Apellido: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Nombre: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Sexo: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Numero de Cedula: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Fecha de Donacion: </span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
