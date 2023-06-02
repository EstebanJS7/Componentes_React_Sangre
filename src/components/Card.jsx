import { useState, useEffect } from "react";
import axios from "axios";
import Deletei from './Deletei'
import Sharei from "./Sharei";

const Card = () => {
  const [datos, setDatos] = useState(null);
  // let tipo_sangre = ["A+", "A-", "B+", "B-", "O+", "O-", "AB-", "AB+"];
  // let source = "img/" + tipo_sangre[item.tipo_sangre - 1] + ".png";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("Sesión de usuario conectado");
      axios
        .get("http://192.168.16.90:8000/api/solicitudes", {
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
          <div className="row justify-content-center my-2">
            {datos.map((item, index) => (
              <div key={index} className="col-md-4">
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <p className="text-center">{item.nombre_apellido_donatario}</p>
                    <span>
                      <Deletei />
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
                        <img src="{source}" className="icono"></img>
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
        </div>
      )}
    </>
  );
};

export default Card;


// import Icon_delete from "./icon_delete";
// import Icon_share from "./Icon_share";

// const Card = () => {
//   let elemento = {
//     id: 81,
//     created_at: "2023-04-17T19:59:19.000000Z",
//     updated_at: "2023-04-17T19:59:19.000000Z",
//     solicitud: "TOKENNNMNNNNNN",
//     creado_por: 31,
//     fecha_limite: "12/4/2023",
//     id_estado: 1,
//     volumenes_necesarios: 78,
//     nombre_apellido_donatario: "fdagfgfsa",
//     cedula_donatario: "4687",
//     telefono_contacto: "0991459016",
//     tipo_sangre: 3,
//     establecimiento: "3",
//   }


//   return (
//     <div className="card-solicitud border border-2 rounded-3 w-50 bg-white mx-auto mt-5 mb-2 p-5">
//       <div className="row">
//         <p className="d-flex justify-content-between border-bottom">
//           <span>
//             <strong>{elemento.nombre_apellido_donatario}</strong>
//           </span>
//           <span>
//             <Icon_delete />
//             <Icon_share />
//           </span>
//         </p>
//         <p className="d-flex justify-content-between">
//           <span>Telefono: </span>
//           <span>{elemento.telefono_contacto}</span>
//         </p>
//         <p className="d-flex justify-content-between">
//           <span>C.I: </span>
//           <span>{elemento.cedula_donatario}</span>
//         </p>
//         <p className="d-flex justify-content-between">
//           <span>Lugar de donacion: </span>
//           <span>{elemento.establecimiento}</span>
//         </p>
//         <p className="d-flex justify-content-between">
          // <span>R.H: </span>
          // <span>
          //   <img src="{source}" className="icono"></img>
          // </span>
//         </p>
//         <p className="d-flex justify-content-between">
          // <span>Volumenes: </span>
          // <span>{elemento.volumenes_necesarios}</span>
//         </p>
//         <p className="text-center">{elemento.solicitud}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;


