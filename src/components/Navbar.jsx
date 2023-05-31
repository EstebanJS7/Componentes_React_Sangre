
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
            <a href="/punto-donacion">Puntos de Donacion</a>
          </li>
          <li>
            <a href="">Solicitudes</a>
          </li>
          <li>
            <a href="/certificados">Certificados</a>
          </li>
        </ul>
        <div className="navbutton">
            <ButtonForms transparent={false} background="#1c74e4" textColor="white" showSymbol={true} symbolPosition="left"  icon="bi bi-person-fill" border={false} disabled={false}  height='30px'>
                Perfil
            </ButtonForms>
            <ButtonForms transparent={false} background="white" textColor="#1c74e4" showSymbol={false}  border={false} disabled={false}  height='30px'>
               <a style={stylea} href='/login'>Login</a> 
            </ButtonForms>
      </div>
    </nav>
  );
}

export default Navbar;