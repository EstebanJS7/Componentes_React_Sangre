
import { NavLink } from "react-router-dom";
import ButtonForms from "./ButtonForms";

function Navbar() {
  const stylea = {
    textDecoration: 'none', 
    color: 'inherit' 
  };
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
        <div className="navbutton">
            <ButtonForms transparent={false} link='/perfil' background="#1c74e4" textColor="white" showSymbol={true} symbolPosition="left"  icon="bi bi-person-fill" border={false} disabled={false}  height='30px'>
            Perfil
            </ButtonForms>
            <ButtonForms transparent={false} link='/login' background="white" textColor="#1c74e4" showSymbol={false}  border={false} disabled={false}  height='30px'>
               Login
            </ButtonForms>
      </div>
    </nav>
  );
}

export default Navbar;