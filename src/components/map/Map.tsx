import 'leaflet/dist/leaflet.css'
import { MapContainer, Popup, TileLayer } from 'react-leaflet'
import { MarkerLayer, Marker } from 'react-leaflet-marker'
import logo from '../../../assets/logo.svg'
import Image from 'next/image'

const Map = () => {
  return (
    <MapContainer
      center={[-23.4230881, -51.9467842]}
      zoom={17}
      scrollWheelZoom={true}
      style={{ height: '350px', width: '400px', borderRadius: '4px' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerLayer>
        <Marker position={[-23.4230881, -51.9467842]}>
          <div className="bg-white rounded-lg p-1 pb-0 shadow">
            <Image src={logo} width={40} height={40}></Image>
          </div>
        </Marker>
      </MarkerLayer>
    </MapContainer>
  )
}

export default Map
