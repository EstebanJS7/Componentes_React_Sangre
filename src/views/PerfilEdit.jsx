import { useState } from "react"
import axios from "axios"

const PerfilEdit = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [maxDate] = useState(new Date().toISOString().split("T")[0]);
    const [gender, setGender] = useState("");
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") setName(value);
        if (name === "lastName") setLastName(value);
        if (name === "email") setEmail(value);
        if (name === "gender") setGender(value);
        if (name === "birthdate") setBirthdate(value);
    };

    const changePerfil = () => {

        const token = localStorage.getItem("token");

        localStorage.setItem("token", token);
        console.log()

        axios
            .post(
                "http://192.168.16.90:8000/api/editar-perfil/",
                { name, surname: lastName, email, fecha_nacimiento: birthdate, sexo: gender },
                {
                    headers: { Authorization: "Bearer " + token },
                }
            )
            .then((response) => alert("Cambios en el perfil realizado con éxito"))
            .catch((error) => {
                console.error(error.response.data);
            });
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
        if (!email) {
            validationErrors.email = "Por favor, ingresa tu email";
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
        if (!validateEmail(email)) {
            validationErrors.email = "Ingresa un email válido";
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        changePerfil();
        console.log("Cambios de perfil realizado con exito");
    };

    const validateName = (value) => {
        const nameRegex = /^[a-zA-Z\s]*$/;
        return nameRegex.test(value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="text-center">Editar Perfil</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.name ? "is-invalid" : ""
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
                                            className={`form-control ${errors.lastName ? "is-invalid" : ""
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
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className={`form-control ${errors.email ? "is-invalid" : ""
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
                                        <label htmlFor="gender" className="form-label">
                                            Sexo
                                        </label>
                                        <select
                                            className={`form-select ${errors.gender ? "is-invalid" : ""
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
                                            className={`form-control ${errors.birthdate ? "is-invalid" : ""
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
                                        Editar perfil
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PerfilEdit