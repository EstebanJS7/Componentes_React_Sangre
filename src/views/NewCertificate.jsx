import { useState, useEffect } from "react";
import axios from "axios";

const NewCertificate = () => {
  const [establishment, setEstablishment] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});
  const [establecimiento, setEstablecimiento] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(name,value)

    if (name === "establishment") setEstablishment(value);
    if (name === "date") setDate(value);
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

  const newCertificate = () => {
    const token = localStorage.getItem("token");

    localStorage.setItem("token", token);
    console.log(date,establishment)
    axios
      .post(
        "http://192.168.16.90:8000/api/certificados",
        { fecha_donacion: date, local_donacion_id: establishment },
        {
          headers: { Authorization: "Bearer " + token },
        }
      )
      .then((response) => alert("Certificado generado con éxito"))
      .catch((error) => {
        console.error(error.response.data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!establishment) {
      validationErrors.establishment =
        "Por favor, selecciona un establecimiento";
    }

    if (!date) {
      validationErrors.date = "Por favor, selecciona una fecha";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    newCertificate();
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        {establecimiento && (
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Nuevo Certificado</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Fecha de Donación
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      value={date}
                      id="date"
                      name="date"
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="establishment" className="form-label">
                      Centro
                    </label>
                    <select
                      className={`form-select ${errors.establishment ? "is-invalid" : ""
                        }`}
                      id="establishment"
                      name="establishment"
                      value={establishment}
                      onChange={handleInputChange}
                      required
                    >
                      <option selected value="">Selecciona un establecimiento</option>
                      {establecimiento.map((item) => (
                        <option key={item.id} value={item.id}>
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
                  <button type="submit" className="btn btn-primary">
                    Generar Certificado
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewCertificate;
