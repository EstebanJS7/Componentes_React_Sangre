import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";




const Check = ({ texto, datos, setDatos }) => {

    const [checkeado, setCheckeado] = useState(false)
    const tokenRedux = useSelector(state => state.token)

    useEffect(() => {
        // const token = localStorage.getItem("token");

        if (checkeado == false) {
            axios
                .get("http://192.168.16.90:8000/api/solicitudes")
                .then((response) => {
                    console.log(response.data.data);
                    setDatos(response.data.data);
                })
                .catch((error) => console.error(error));

        } else if(checkeado ==true) {

            axios
                .get("http://192.168.16.90:8000/api/solicitudes-protegido", {
                    headers: { Authorization: "Bearer " + tokenRedux },
                })
                .then((response) => {
                    console.log(response.data.data);
                    setDatos(response.data.data);
                })
                .catch((error) => console.error(error));
        }

        
    }, [checkeado]);

    const style = { backgroundColor: '#1c74e4' }

    return (

        <div className=" p-3 px-4 rounded-3 text-white" style={style}>
            <div className="form-check" >

                <input checked={checkeado} onChange={() => setCheckeado(!checkeado)} className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                    {texto}
                </label>

            </div>
        </div>

    );
};

export default Check