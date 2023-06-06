import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ci, setCI] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [maxDate] = useState(new Date().toISOString().split("T")[0]);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "lastName") setLastName(value);
    if (name === "ci") setCI(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "repeatPassword") setRepeatPassword(value);
    if (name === "gender") setGender(value);
    if (name === "birthdate") setBirthdate(value);
  };

  const register = async () => {
    try {
      const response = await axios.post(
        "http://192.168.16.90:8000/api/registro",
        { name, surname: lastName, password, email, fecha_nacimiento: birthdate, sexo: gender, nro_cedula: ci}
      );
      // const { token } = response.data;

      // localStorage.setItem("token", token);
      dispatch({type: 'setToken', payload: response.data.token})
      dispatch({type: 'setUser', payload: response.data.user})

      alert("Registro exitoso");
    } catch (error) {
      console.error(error.response.data);

    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword(!showRepeatPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "Por favor, ingresa tu nombre";
    }
    if (!lastName) {
      validationErrors.lastName = "Por favor, ingresa tu apellido";
    }
    if (!ci) {
      validationErrors.ci = "Por favor, ingresa tu CI";
    }
    if (!email) {
      validationErrors.email = "Por favor, ingresa tu email";
    }
    if (!password) {
      validationErrors.password = "Por favor, ingresa tu contraseña";
    }
    if (!repeatPassword) {
      validationErrors.repeatPassword = "Por favor, repite tu contraseña";
    }
    if (!gender) {
      validationErrors.gender = "Por favor, selecciona tu sexo";
    }
    if (!birthdate) {
      validationErrors.birthdate = "Por favor, ingresa tu fecha de nacimiento";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!validateName(name) || !validateName(lastName)) {
      validationErrors.name =
        "Ingresa un nombre y apellido válido (solo letras)";
    }
    if (!validateCI(ci)) {
      validationErrors.ci = "Ingresa un CI válido (solo números enteros)";
    }
    if (!validateEmail(email)) {
      validationErrors.email = "Ingresa un email válido";
    }
    if (password !== repeatPassword) {
      validationErrors.repeatPassword = "Las contraseñas no coinciden";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    register();
    console.log("Registro exitoso");
  };

  const validateName = (value) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(value);
  };

  const validateCI = (value) => {
    const ciRegex = /^[0-9]+$/;
    return ciRegex.test(value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Registro</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    placeholder="Ingresa tu nombre"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    pattern="[A-Za-z\s]+"
                    required
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Apellido
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    placeholder="Ingresa tu apellido"
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                    pattern="[A-Za-z\s]+"
                    required
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="ci" className="form-label">
                    CI
                  </label>
                  <input
                    type="text"
                    className={`form-control ${errors.ci ? "is-invalid" : ""}`}
                    id="ci"
                    placeholder="Ingresa tu CI"
                    name="ci"
                    value={ci}
                    onChange={handleInputChange}
                    pattern="[0-9]+"
                    required
                  />
                  {errors.ci && (
                    <div className="invalid-feedback">{errors.ci}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="Ingresa tu email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      id="password"
                      placeholder="Ingresa tu contraseña"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      minLength={6}
                      required
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="repeatPassword" className="form-label">
                    Repetir Contraseña
                  </label>
                  <div className="input-group">
                    <input
                      type={showRepeatPassword ? "text" : "password"}
                      className={`form-control ${
                        errors.repeatPassword ? "is-invalid" : ""
                      }`}
                      id="repeatPassword"
                      placeholder="Repite tu contraseña"
                      name="repeatPassword"
                      value={repeatPassword}
                      onChange={handleInputChange}
                      minLength={6}
                      required
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={toggleRepeatPasswordVisibility}
                    >
                      {showRepeatPassword ? "Ocultar" : "Mostrar"}
                    </button>
                  </div>
                  {errors.repeatPassword && (
                    <div className="invalid-feedback">
                      {errors.repeatPassword}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="gender" className="form-label">
                    Sexo
                  </label>
                  <select
                    className={`form-select ${
                      errors.gender ? "is-invalid" : ""
                    }`}
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="H">Masculino</option>
                    <option value="M">Femenino</option>
                  </select>
                  {errors.gender && (
                    <div className="invalid-feedback">{errors.gender}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="birthdate" className="form-label">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    className={`form-control ${
                      errors.birthdate ? "is-invalid" : ""
                    }`}
                    id="birthdate"
                    name="birthdate"
                    max={maxDate}
                    value={birthdate}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.birthdate && (
                    <div className="invalid-feedback">{errors.birthdate}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Registrarse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
