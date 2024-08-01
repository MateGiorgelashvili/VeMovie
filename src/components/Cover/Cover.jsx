import "./cover.css"
import { Carousel } from "../Carousel/Carousel";
const Cover = ()=>{
  return(
    <div id="cover">
          <div className="carousel-section">
            <Carousel />
          </div>
    </div>
  )
}

export { Cover }