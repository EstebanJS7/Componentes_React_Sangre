import { useState, useEffect } from "react";
import axios from "axios";
import Deletei from './Deletei'
import Sharei from "./Sharei";

const Card = ({datos, setDatos}) => {
  
  let tipo_sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
  let source = "https://res.cloudinary.com/dhzoxdo6q/image/upload/donacion-sangre/";

  

  return (
    <>
      {datos && (
        <>
          <div className="row justify-content-center m-1">
            {datos.map((item, index) => (
              <div key={index} className="col-md-4 my-2">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <p className="text-center">{item.nombre_apellido_donatario}</p>
                    <span>
                      <Deletei id={item.id} datos={datos} setDatos={setDatos}/>
                      <Sharei />
                    </span>
                  </div>
                  <div className="card-body">
                    <p className="d-flex justify-content-between">
                      <span>Telefono: </span>
                      <span>{item.telefono_contacto}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>C.I: </span>
                      <span>{item.cedula_donatario}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Lugar de donacion: </span>
                      <span>{item.establecimiento}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>R.H: </span>
                      <span>
                        <img width={30} src={source + tipo_sangre[item.tipo_sangre - 1] + '.png'} className="icono"></img>
                      </span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Volumenes: </span>
                      <span>{item.volumenes_necesarios}</span>
                    </p>
                    <p className="text-center">{item.solicitud}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Card;



