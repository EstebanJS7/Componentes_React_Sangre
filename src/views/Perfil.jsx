import React from "react";

const Perfil = () => {
  const styleimg = {
    width: '120px',
    height: '180px',
  }

  const boldText ={
    fontWeight: 'bold',
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-1" >
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Alan TORO</h3>
            </div>
            <div className="card-body">
              <div className="rounded-circle border-primary d-flex justify-content-center mb-4" >
                <img
                  className="image-perfil py-4"
                  src="src/views/perfil.png"
                  alt="foto de perfil"
                  style={styleimg}
                />
              </div>
              <p className="d-flex justify-content-between">
                <span style={boldText}>Fecha de nacimiento: </span>
                <span> </span>
              </p>
              <p className="d-flex justify-content-between">
                <span style={boldText}>Email: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span style={boldText}>Ultima vez donado: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span style={boldText}>Sexo: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span style={boldText}>C.I: </span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
