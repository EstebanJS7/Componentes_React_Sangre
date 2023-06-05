import { useState } from "react"
import axios from "axios";

const PassEdit = () => {
    const [oldPass, setOldPass] = useState("");
    const [showOldPass, setShowOldPass] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "oldPass") setOldPass(value);
        if (name === "password") setPassword(value);
        if (name === "repeatPassword") setRepeatPassword(value);
    };

    const newPass = () => {

        const token = localStorage.getItem("token");

        localStorage.setItem("token", token);
        axios
            .post(
                "http://192.168.16.90:8000/api/cambiar-password/",
                { old_password: oldPass, password },
                {
                    headers: { Authorization: "Bearer " + token },
                }
            )
            .then((response) => alert("Se ha cambiado la contraseña exitosamente"))
            .catch((error) => {
                console.error(error.response.data);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!oldPass) {
            validationErrors.password = "Por favor, ingresa tu contraseña";
        }
        if (!password) {
            validationErrors.password = "Por favor, ingresa tu contraseña";
        }
        if (!repeatPassword) {
            validationErrors.repeatPassword = "Por favor, repite tu contraseña";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (password === oldPass) {
            validationErrors.password = "La nueva contraseña coincide con la antigua";
        }

        if (password !== repeatPassword) {
            validationErrors.repeatPassword = "Las contraseñas no coinciden";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        newPass();
        console.log("Contraseña cambiado exitosamente");
    };

    const toggleOldPasswordVisibility = () => {
        setShowOldPass(!showOldPass);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    }


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Cambio de contraseña</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="oldPass" className="form-label">
                                        Contraseña Actual
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type={showOldPass ? "text" : "password"}
                                            className={`form-control ${errors.Oldpass ? "is-invalid" : ""
                                                }`}
                                            id="oldPass"
                                            placeholder="Ingresa tu contraseña"
                                            name="oldPass"
                                            value={oldPass}
                                            onChange={handleInputChange}
                                            minLength={1}
                                            required
                                        />
                                        <button
                                            className="btn btn-outline-secondary"
                                            type="button"
                                            onClick={toggleOldPasswordVisibility}
                                        >
                                            {showOldPass ? "Ocultar" : "Mostrar"}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <div className="invalid-feedback">{errors.Oldpass}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Contraseña Nueva
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`form-control ${errors.password ? "is-invalid" : ""
                                                }`}
                                            id="password"
                                            placeholder="Ingresa tu contraseña"
                                            name="password"
                                            value={password}
                                            onChange={handleInputChange}
                                            minLength={1}
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
                                        Repetir Contraseña Nueva
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type={showRepeatPassword ? "text" : "password"}
                                            className={`form-control ${errors.repeatPassword ? "is-invalid" : ""
                                                }`}
                                            id="repeatPassword"
                                            placeholder="Repite tu contraseña"
                                            name="repeatPassword"
                                            value={repeatPassword}
                                            onChange={handleInputChange}
                                            minLength={1}
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
                                <button type="submit" className="btn btn-primary">
                                    Cambiar contraseña
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PassEdit