interface cardInterface {
  lat: number
  lgn: number
}

const MapPointer = ({ lat, lgn }: cardInterface) => {
  return (
    <>
      <div className="w-4 h-4 bg-black rounded-sm"></div>
    </>
  )
}
export default MapPointer
