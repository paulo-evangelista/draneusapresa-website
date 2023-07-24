import 'leaflet/dist/leaflet.css'
import { MapContainer, Popup, TileLayer } from 'react-leaflet'
import { MarkerLayer, Marker } from 'react-leaflet-marker'
import logo from '../../../assets/logo.svg'
import Image from 'next/image'

const Map = () => {
  return (
    <MapContainer
      center={[-23.422784,-51.946317]}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: '350px', width: '300px', borderRadius: '4px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerLayer>
        <Marker position={[-23.422789,-51.946693]}>
          <div className="bg-white rounded-full w-8 h-8 p-1 pb-0 shadow border-pink-500 border-2">
            <Image alt="mapMarker" src={logo}></Image>
          </div>
        </Marker>
      </MarkerLayer>
    </MapContainer>
  )
}

export default Map
