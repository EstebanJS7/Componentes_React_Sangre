import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Perfil = () => {
  const tokenRedux = useSelector(state => state.token)
  const dispatch = useDispatch()

	const navigate = useNavigate()
  const styleimg = {
    width: "120px",
    height: "180px",
  };

  const boldText = {
    fontWeight: "bold",
  };

  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    if ( tokenRedux ) {
      console.log("Sesión de usuario conectado");
      axios
        .get("http://192.168.16.90:8000/api/user/", {
          headers: { Authorization: "Bearer " + tokenRedux },
        })
        .then((response) => {
          console.log(response);
          setDatos(response.data)
        })
        .catch((error) => console.error(error));
    }
  }, []);

  const cerrarSesion = () =>{
    dispatch({type: 'logout'})
	  navigate('/login')
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-1">
        <div className="col-md-4">
          {datos && <div className="card">
            <div className="card-header">
              <h3 className="text-center">{datos.name} {datos.surname}</h3>
            </div>
            <div className="card-body">
              <div className="rounded-circle border-primary d-flex justify-content-center mb-4">
                <img
                  className="image-perfil py-4"
                  src="src/views/perfil.png"
                  alt="foto de perfil"
                  style={styleimg}
                />
              </div>
              <p className="d-flex justify-content-between">
                <span style={boldText}>Fecha de nacimiento: </span>
                <span>{datos.fecha_nacimiento}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span style={boldText}>Email: </span>
                <span>{datos.email}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span style={boldText}>Ultima vez donado: </span>
                <span>{datos.ult_vez_donado}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span style={boldText}>Sexo: </span>
                <span>{datos.sexo}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span style={boldText}>C.I: </span>
                <span>{datos.nro_cedula}</span>
              </p>
            </div>
            <div className="d-grid gap-2 m-2 pb-2">
              <hr />
              <NavLink className="btn btn-primary" to="/editar-perfil" role="button">Editar Perfil</NavLink>
              <NavLink className="btn btn-primary" to="/cambiar-pass" role="button">Cambiar contraseña</NavLink>
              <button className="btn btn-primary" href="#" role="button" onClick={cerrarSesion}>Cerrar Sesión</button>
            </div>
          </div>}
         
        </div>
      </div>
    </div>
  );
};

export default Perfil;
