import { useState } from "react";

const NewCertificate = () => {
  const [establishment, setEstablishment] = useState("");
  const [maxDate] = useState(new Date().toISOString().split("T")[0]);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "establishment") {
      setEstablishment(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!establishment) {
      validationErrors.establishment = "Por favor, selecciona un establecimiento";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Registro exitoso");
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Nuevo Certificado</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="maxDate" className="form-label">
                    Fecha de Donacion
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="maxDate"
                    name="maxDate"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="establishment" className="form-label">
                    Centro
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
                    <option value="Establecimiento 1">Establecimiento 1</option>
                    <option value="Establecimiento 2">Establecimiento 2</option>
                    <option value="Establecimiento 3">Establecimiento 3</option>
                    <option value="Establecimiento 4">Establecimiento 4</option>
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
      </div>
    </div>
  );
};

export default NewCertificate;
