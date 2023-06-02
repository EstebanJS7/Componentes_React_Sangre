import { useState, useEffect } from "react";
import axios from "axios";

const Certificates = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Sesión de usuario conectado");
      axios
        .get("http://192.168.16.90:8000/api/certificados/", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
          console.log(response.data.data);
          setDatos(response.data.data);
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <>
      {datos && (
        <div className="container">
          <a
            className="btn btn-primary"
            href="./certificado-solicitud"
            role="button"
          >
            + Certificados
          </a>
          <div className="row justify-content-center my-2">
            {datos.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-center">Certificados</h3>
                  </div>
                  <div className="card-body">
                    <p className="d-flex justify-content-between">
                      <span>Establecimiento:</span>
                      <span>{item.local_donacion}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Apellido: </span>
                      <span>{item.user.surname}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Nombre: </span>
                      <span>{item.user.name}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Sexo: </span>
                      <span>{item.user.sexo}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Numero de Cedula: </span>
                      <span>{item.user.nro_cedula}</span>
                    </p>
                    <p className="d-flex justify-content-between">
                      <span>Fecha de Donacion: </span>
                      <span>{item.fecha_donacion}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
