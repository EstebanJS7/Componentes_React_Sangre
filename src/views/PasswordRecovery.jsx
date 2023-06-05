import { useState } from "react";
import axios from "axios";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      console.log("Correo electrónico enviado para recuperar la contraseña");
      resetPass();
    } else {
      setError("Ingresa un correo electrónico válido");
    }
  };
  const resetPass = () => {
    axios
      .post(
        "http://192.168.16.90:8000/api/reset-password/",
        { email },
      )
      .then((response) => alert("Contraseña enviada"))
      .catch((error) => {
        console.error(error.response.data);
      });
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
            <div className="card-header bg-light">
              <h3 className="card-title text-center mb-0">
                Recuperar contraseña
              </h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {error && <div className="text-danger">{error}</div>}
                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Recuperar contraseña
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
