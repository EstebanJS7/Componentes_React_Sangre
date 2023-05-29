import  { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const ViajarMapa = ({goLocation}) => {
    const mapa = useMap()

    useEffect(() => {
      goLocation && mapa.flyTo(goLocation,mapa.getZoom())
    }, [goLocation])
    
  return null
}

export default ViajarMapa