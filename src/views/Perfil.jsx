import React from "react";

const Perfil = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-1">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Alan TORO</h3>
            </div>
            <div className="card-body">
              <img
                className="d-flex justify-content-center"
                src=""
                alt="foto de perfil"
              />
              <p className="d-flex justify-content-between">
                <span>Fecha de nacimiento</span>
                <span> </span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Email </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Ultima vez donado: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Sexo: </span>
                <span></span>
              </p>
              <p className="d-flex justify-content-between">
                <span>C.I: </span>
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
