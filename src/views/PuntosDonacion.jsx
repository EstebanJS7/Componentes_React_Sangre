import { useState } from 'react';
import Acordeon from '../components/Acordeon'
import Maps from '../components/maps';
const PuntosDonacion = () => {
    const data = [
        {
          id: 1,
          local_donacion: "EL CANTARO",
          longitud: -56.820182,
          latitud: -27.387026,
          creado_por: null,
          direccion: "Av. Paraguay Casi Mcal. Lopez 343",
          hora_apertura: 8,
          hora_cierre: 21,
        },
        {
          id: 2,
          local_donacion: "FCA - CAMPUS UNP",
          longitud: -58.288459,
          latitud: -26.879844,
          creado_por: null,
          direccion: "Eusebio Ayala casi Intendentes Militares 123",
          hora_apertura: 8,
          hora_cierre: 21,
        },
        {
          id: 3,
          local_donacion: "EL CANTARO",
          longitud: -56.820182,
          latitud: -27.387026,
          creado_por: null,
          direccion: "Av. Paraguay Casi Mcal. Lopez 343",
          hora_apertura: 8,
          hora_cierre: 21,
        },
        {
          id: 4,
          local_donacion: "Surubi-i, Mariano",
          longitud: -57.521369,
          latitud: -25.194156,
          creado_por: null,
          direccion: "Ruta Transchaco 1232 casi las Lomas Km. 3",
          hora_apertura: null,
          hora_cierre: null,
        },
        {
          id: 5,
          local_donacion: "SODEP",
          longitud: -57.583222,
          latitud: -25.308953,
          creado_por: null,
          direccion: "Av. Paraguay Casi Mcal. Lopez 343",
          hora_apertura: 8,
          hora_cierre: 21,
        },
        {
          id: 6,
          local_donacion: "ROSHKA",
          longitud: -57.6100684,
          latitud: -25.2818691,
          creado_por: null,
          direccion: null,
          hora_apertura: null,
          hora_cierre: null,
        },
      ];

      const [location, setLocation] = useState(data)
      const [goLocation, setGoLocation] = useState(null)
    
      return (
    <div>
        <h2 className='text-center'>Puntos de Donacion</h2>
        <Maps location={location} goLocation={goLocation}/>
        <Acordeon location={location} setGoLocation={setGoLocation}/>
    </div>
  )
}

export default PuntosDonacion