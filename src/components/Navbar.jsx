
import { NavLink } from "react-router-dom";
import ButtonForms from "./ButtonForms";
import { useSelector } from "react-redux";

function Navbar() {

  const tokenRedux = useSelector(state => state.token)

  return (
   
    <nav className="containernav">
      <img
        className="logoimg"
        src="https://res.cloudinary.com/dhzoxdo6q/image/upload/v1685025897/Roshka/react-white_hcr6av.png"
      />

        <ul className="listaelement">
          <li>
            <NavLink to="/punto-donacion">Puntos de Donacion</NavLink>
          </li>
          <li>
            <NavLink to="/solicitudes">Solicitudes</NavLink>
          </li>
          <li>
            <NavLink to="/certificados">Certificados</NavLink>
          </li>
        </ul>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mx-2">
            {tokenRedux && <ButtonForms transparent={false} link='/perfil' background="#1c74e4" textColor="white" showSymbol={true} symbolPosition="left"  icon="bi bi-person-fill" border={false} disabled={false}  height='30px'>
            Perfil
            </ButtonForms>}
            {!tokenRedux && <ButtonForms transparent={false} link='/login' background="white" textColor="#1c74e4" showSymbol={false}  border={false} disabled={false}  height='30px'>
               Login
            </ButtonForms>}
            {!tokenRedux && <ButtonForms transparent={false} link='/registrarse' background="white" textColor="#1c74e4" showSymbol={false}  border={false} disabled={false}  height='30px' symbolPosition="left"  icon="bi bi-person-fill">
               Registrarse
            </ButtonForms>}
            {tokenRedux && <ButtonForms transparent={false} link='/login' background="white" textColor="#1c74e4" showSymbol={false}  border={false} disabled={false}  height='30px'>
               Cerrar Sesión
            </ButtonForms>}
      </div>
    </nav>
  );
}

export default Navbar;