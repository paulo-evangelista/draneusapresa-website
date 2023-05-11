interface cardInterface {
  title: string
  description: string
  link: string
}

const CarouselCard = ({ title, description, link }: cardInterface) => {
  return (
    <div className=" h-80 text-white text-center w-3/4 bg-mainPink rounded m-2">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p className="text-white">{description}</p>
      </div>
      <div>
        <a href={link}>Read more</a>
      </div>
    </div>
  )
}
export default CarouselCard
