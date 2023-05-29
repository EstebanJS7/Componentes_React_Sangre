
import Icon_delete from "./icon_delete";
import Icon_share from "./Icon_share";

const Card = () => {
  let elemento = {
    id: 81,
    created_at: "2023-04-17T19:59:19.000000Z",
    updated_at: "2023-04-17T19:59:19.000000Z",
    solicitud: "TOKENNNMNNNNNN",
    creado_por: 31,
    fecha_limite: "12/4/2023",
    id_estado: 1,
    volumenes_necesarios: 78,
    nombre_apellido_donatario: "fdagfgfsa",
    cedula_donatario: "4687",
    telefono_contacto: "0991459016",
    tipo_sangre: 3,
    establecimiento: "3",
  }


  return (
    <div className="card-solicitud border border-2 rounded-3 w-50 bg-white mx-auto mt-5 mb-2 p-5">
      <div className="row">
        <p className="d-flex justify-content-between border-bottom">
          <span>
            <strong>{elemento.nombre_apellido_donatario}</strong>
          </span>
          <span>
            <Icon_delete />
            <Icon_share />
          </span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Telefono: </span>
          <span>{elemento.telefono_contacto}</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>C.I: </span>
          <span>{elemento.cedula_donatario}</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Lugar de donacion: </span>
          <span>{elemento.establecimiento}</span>
        </p>
        <p className="d-flex justify-content-between">
          <span>R.H: </span>
          <span>
            <img src="{source}" className="icono"></img>
          </span>
        </p>
        <p className="d-flex justify-content-between">
          <span>Volumenes: </span>
          <span>{elemento.volumenes_necesarios}</span>
        </p>
        <p className="text-center">{elemento.solicitud}</p>
      </div>
    </div>
  );
};

export default Card;


