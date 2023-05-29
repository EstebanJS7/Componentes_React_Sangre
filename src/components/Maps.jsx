import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ViajarMapa from "./ViajarMapa";

function Maps({location, goLocation}) {
  const initial = [-25.281993296617944, -57.61059141021138];
  const mapsgoogle = "https://www.google.com/maps/search/?api=1&query=";

  console.log(location)

  return (
    <div className="container-map col-mb-10">
      
      {<MapContainer center={initial} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {location && location.map((item, index) => (
          <Marker key={index} position={[item.latitud, item.longitud]}>
            <Popup>
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
              {item.hora_apertura ? <>{item.hora_apertura}:00</> : "00:00"} -{" "}
              {item.hora_cierre ? <>{item.hora_cierre}:00</> : "00:00"} <br />
              <a href={mapsgoogle + item.latitud + "%2c" + item.longitud}>
                Ir en Google Maps
              </a>
            </Popup>
          </Marker>
        ))}
        <ViajarMapa goLocation={goLocation}></ViajarMapa>
      </MapContainer>}
    </div>
  );
}

export default Maps;
