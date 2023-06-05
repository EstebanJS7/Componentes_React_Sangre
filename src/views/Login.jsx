import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
   };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailBlur = () => {
    validateEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login()
    } else {
      console.log('Por favor, completa todos los campos');
    }
  };

  const login = async () => {
    try {
      const response = await axios.post(
        "http://192.168.16.90:8000/api/login/",
        { email, password }
      );
      const { token } = response.data;

      localStorage.setItem("token", token);

      alert("Inicio de sesión exitoso");
    } catch (error) {
      console.error(error.response.data);
      alert(error.response.data.message);
    }
  };



  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors(prevErrors => ({ ...prevErrors, email: 'Ingresa un email válido' }));
    } else {
      setErrors(prevErrors => ({ ...prevErrors, email: '' }));
    }
  };

  const linkStyles = {
    color: 'red',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Iniciar sesión</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className={`mb-3 ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    placeholder="Ingresa tu email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    onBlur={handleEmailBlur}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className={`mb-3 ${errors.password ? 'has-error' : ''}`}>
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      placeholder="Ingresa tu contraseña"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      minLength={2}
                      required
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                  </div>
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
              </form>
            </div>
            <div className="card-footer text-center">
              <a href="/registrarse" style={linkStyles}>Regístrate</a><br />
              <a href="/recuperar-password" style={linkStyles}>¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
