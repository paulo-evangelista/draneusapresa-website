'use client'

import 'leaflet/dist/leaflet.css'
import 'src/styles/global.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { MarkerLayer, Marker } from 'react-leaflet-marker'
import logo from '../../../assets/logo.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Map = () => {

  const [windowWidth, setWindowWidth] = useState<number>(null)
  const [mapDimensions, setMapDimensions] = useState<number[]>([0, 0])
  const [renderMap, setRenderMap] = useState<boolean>(false)

  useEffect( () => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    if (windowWidth) {
    const height = windowWidth <= 600 ? windowWidth - 50 : 500
    const width = windowWidth <= 900 ? windowWidth - 100 : windowWidth - 300
    setMapDimensions([height, width])
    setRenderMap(true)
    }
  }, [windowWidth] )


  return (
    renderMap ?
    <MapContainer
      center={[-23.422784,-51.946317]}
      zoom={17}
      attributionControl={false}
      scrollWheelZoom={true}
      style={{ height: `${mapDimensions[0]}px`, width: `${mapDimensions[1]}px`, borderRadius: '4px', zIndex: 0 }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MarkerLayer>
        <Marker position={[-23.422889,-51.946500]} placement='center'>
          <div className="bg-white rounded-full w-8 h-8 p-1 pb-0 shadow border-pink-500 border-2 -translate-x-3 -translate-y-3">
            <Image alt="mapMarker" src={logo}></Image>
          </div>
        </Marker>
      </MarkerLayer>
    </MapContainer>
    :
    null
  )
}

export default Map
