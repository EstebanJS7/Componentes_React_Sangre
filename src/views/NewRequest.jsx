import { useState, useEffect } from "react";
import axios from "axios";

const NewRequest = () => {
  const [fullName, setFullName] = useState("");
  const [ci, setCI] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [establishment, setEstablishment] = useState("");
  const [volume, setVolume] = useState("");
  const [date, setDate] = useState("");
  const [maxDate] = useState(new Date().toISOString().split("T")[0]);
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [establecimiento, setEstablecimiento] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "ci") {
      setCI(value);
    } else if (name === "bloodType") {
      setBloodType(value);
    } else if (name === "establishment") {
      setEstablishment(value);
    } else if (name === "volume") {
      setVolume(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "date") {
      setDate(value);
    }
  };

  useEffect(() => {
    axios
      .get("http://192.168.16.90:8000/api/locales")
      .then((response) => {
        console.log(response.data.data);
        setEstablecimiento(response.data.data);
      })
      .catch((error) =>
        console.log("error al cargar los establecimientos", error)
      );
  }, []);

  const requestToken = () => {
    const token = localStorage.getItem("token");

    localStorage.setItem("token", token);
    axios
      .post(
        "http://192.168.16.90:8000/api/solicitudes",
        { nombre_apellido_donatario: fullName, cedula_donatario: ci, tipo_sangre: bloodType,
        establecimiento: establishment, volumenes_necesarios: volume, fecha_limite: date,
        telefono_contacto: phone, solicitud: description
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((response) => alert("Solicitud generada con éxito"))
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const [name, lastName] = fullName.split(" ");

    if (!name) {
      validationErrors.fullName = "Por favor, ingresa tu nombre y apellido";
    }
    if (!ci) {
      validationErrors.ci = "Por favor, ingresa tu CI";
    }
    if (!bloodType) {
      validationErrors.bloodType = "Por favor, selecciona tu tipo de sangre";
    }
    if (!establishment) {
      validationErrors.establishment = "Por favor, selecciona un establecimiento";
    }
    if (!date) {
      validationErrors.date = "Por favor, selecciona una fecha";
    }
    if (!volume) {
      validationErrors.volume = "Por favor, ingresa el volumen";
    }
    if (!phone) {
      validationErrors.phone = "Por favor, ingresa tu teléfono";
    }
    if (!description) {
      validationErrors.description = "Por favor, ingresa una descripción";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!validateName(name) || !validateName(lastName)) {
      validationErrors.fullName =
        "Ingresa un nombre y apellido válido (solo letras)";
    }
    if (!validateCI(ci)) {
      validationErrors.ci = "Ingresa un CI válido (solo números enteros)";
    }
    if (!validatePhone(phone)) {
      validationErrors.phone = "Ingresa un teléfono válido";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Registro exitoso");
    console.log(date)
    requestToken();
  };

  const validateName = (value) => {
    const nameRegex = /^[a-zA-Z\s]*$/;
    return nameRegex.test(value);
  };

  const validateCI = (value) => {
    const ciRegex = /^[0-9]+$/;
    return ciRegex.test(value);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]+$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Nueva Solicitud</h3>
            </div>
            {establecimiento && <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Nombre y Apellido
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.fullName ? "is-invalid" : ""
                    }`}
                    id="fullName"
                    placeholder="Ingresa tu nombre y apellido"
                    name="fullName"
                    value={fullName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="ci" className="form-label">
                    CI
                  </label>
                  <input
                    type="number"
                    className={`form-control ${errors.ci ? "is-invalid" : ""}`}
                    id="ci"
                    placeholder="Ingresa tu CI"
                    name="ci"
                    value={ci}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.ci && (
                    <div className="invalid-feedback">{errors.ci}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="bloodType" className="form-label">
                    Tipo de Sangre
                  </label>
                  <select
                    className={`form-select ${
                      errors.bloodType ? "is-invalid" : ""
                    }`}
                    id="bloodType"
                    name="bloodType"
                    value={bloodType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona un tipo de sangre</option>
                    <option value="0">A+</option>
                    <option value="1">A-</option>
                    <option value="2">B+</option>
                    <option value="3">B-</option>
                    <option value="4">O+</option>
                    <option value="5">O-</option>
                    <option value="6">AB-</option>
                    <option value="7">AB+</option>
                  </select>
                  {errors.bloodType && (
                    <div className="invalid-feedback">{errors.bloodType}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="establishment" className="form-label">
                    Establecimiento
                  </label>
                  <select
                    className={`form-select ${
                      errors.establishment ? "is-invalid" : ""
                    }`}
                    id="establishment"
                    name="establishment"
                    value={establishment}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecciona un establecimiento</option>
                      {establecimiento.map((item) => (
                        <option key={item.id} value={item.local_donacion}>
                          {item.local_donacion}
                        </option>
                      ))}
                  </select>
                  {errors.establishment && (
                    <div className="invalid-feedback">
                      {errors.establishment}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="volume" className="form-label">
                    Volumen
                  </label>
                  <input
                    type="number"
                    className={`form-control ${
                      errors.volume ? "is-invalid" : ""
                    }`}
                    id="volume"
                    placeholder="Ingresa el volumen"
                    name="volume"
                    value={volume}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.volume && (
                    <div className="invalid-feedback">{errors.volume}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Fecha Limite
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={date}
                    onChange={handleInputChange}
                    min={maxDate}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    placeholder="Ingresa tu teléfono"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Descripción
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    id="description"
                    rows="3"
                    placeholder="Ingresa una descripción"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">
                      {errors.description}
                    </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary">
                  Generar Solicitud
                </button>
              </form>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;