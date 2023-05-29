const Acordeon = ({ location, setGoLocation }) => {
    const mapsgoogle = "https://www.google.com/maps/search/?api=1&query=";
    
    const goto = (lat, lng) =>{
        setGoLocation({lat, lng})
    }

    return (
    <div className="accordion mt-3" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Puntos de Donacion
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            {location &&
              location.map((item, index) => (
                <div key={index}>
                  <b>{item.local_donacion}</b>
                  <br />
                  {item.direccion ? (
                    <>
                      {item.direccion}
                      <br />
                    </>
                  ) : (
                    ""
                  )}
                  Horario:{" "}
                  {item.hora_apertura ? <>{item.hora_apertura}:00</> : "00:00"}{" "}
                  - {item.hora_cierre ? <>{item.hora_cierre}:00</> : "00:00"}{" "}
                  <br />
                  <a href={mapsgoogle + item.latitud + "%2c" + item.longitud}>
                    Ir en Google Maps
                  </a>
                    <button className="button-maps" onClick={()=>goto(item.latitud, item.longitud)}>Ir a</button>
                  <hr />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acordeon;
