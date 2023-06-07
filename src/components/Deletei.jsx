import axios from "axios";
import { useSelector } from "react-redux";


function Deletei({id, datos, setDatos}) {
  const tokenRedux = useSelector(state => state.token)
  const eliminar = () =>{
    axios
      .delete(
        "http://192.168.16.90:8000/api/solicitudes/" + id,
        {
          headers: { Authorization: "Bearer " + tokenRedux },
        }
      )
      .then((response) => {
        const newList = datos.filter(solicitud => solicitud.id != id)
        setDatos(newList)
        alert("Solicitud borrada")
      })
      .catch((error) => {
        alert(error.response.data);
      });
  }
  return (
    <i onClick={eliminar} className="bi bi-trash-fill"></i>
  )
}

export default Deletei