interface cardInterface {
  title: string
  description: string
  link: string
}

const CarouselCard = ({ title, description, link }: cardInterface) => {
  return (
    <div className=" h-60 text-white text-center bg-mainPink rounded-lg">
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
