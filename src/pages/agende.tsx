import edit from '../../assets/edit.png'
import Image from 'next/image'
import GoogleMapReact from 'google-map-react'
import MapPointer from '../components/mapPointer'

const Agende = () => {
  return (
    <>
      <div className="items-center text-center min-h-screen bg-white pt-10 py-2">
        <Image src={edit} height={300} width={400}></Image>
        <h1 className="text-4xl mb-2 text-black">
          Conquiste uma vida melhor{' '}
          <span className="text-mainPink">sem sair de casa! </span>
        </h1>
        <p className="text-lg mb-2 text-center px-4 text-gray-700">
          Quer entender por que a doutora é tão aclamada?
        </p>
        <button className="bg-mainPink text-2xl hover:bg-secondPink transition-all text-white font-bold py-2 px-4 shadow-xl rounded-xl w-72">
          Marque sua consulta online
        </button>

        <p className="text-3xl font-bold mt-12 text-black">Nosso endereço:</p>
        <div className="w-full h-80 rounded-xl">
          <GoogleMapReact
            zoom={13}
            defaultCenter={[-23.4230228, -51.9467861]}
            bootstrapURLKeys={{ key: '' }}
          >
            <MapPointer lat={-23.4230228} lgn={-51.9467861}></MapPointer>
          </GoogleMapReact>
        </div>
      </div>
    </>
  )
}

export default Agende
