import { Link } from "react-router-dom";


const ButtonForms = ({
  transparent,
  textColor,
  background,
  showSymbol,
  symbolPosition,
  border,
  borderColor,
  disabled,
  children,
  underline,
  icon,
  height,
  width,
  link,
  check
}) => {
  const buttonStyles = {
    backgroundColor: transparent ? 'transparent' : background || '#F0F0F0',
    color: textColor || '#000000',
    borderStyle: 'solid',
    borderWidth: border ? '1.5px' : 0,
    borderColor: borderColor || '#CCCCCC',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    textDecoration: underline ? 'underline' : 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    height: height || 'auto',
    fontWeight: 'bold',
    width: width || 'auto'
  };

  const symbolStyles = {
    marginLeft: symbolPosition === 'right' ? '5px' : 0,
    marginRight: symbolPosition === 'left' ? '5px' : 0,
    fontSize: '1.7em',
  };

  return (
    <>
      {!check &&
        <Link to={link} className='btn btn-primary' style={buttonStyles} disabled={disabled} href={link}>
          {showSymbol && symbolPosition === 'left' && (
            <span style={symbolStyles}><i className={icon}></i></span>
          )}
          {children}
          {showSymbol && symbolPosition === 'right' && (
            <span style={symbolStyles}><i className={icon}></i></span>
          )}
        </Link>}

      {check &&
        <>
          <div className="form-check rounded-3 d-flex p-0" style={buttonStyles}>
            <input className="form-check-input fs-3" type="checkbox" value="" id="defaultCheck1"/>
              <label className="form-check-label" htmlFor="defaultCheck1">
                Mis Solicitudes
              </label>
          </div>
        </>}
    </>
  );
};

export default ButtonForms;