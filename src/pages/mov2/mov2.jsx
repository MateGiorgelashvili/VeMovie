import "./mov2.css"
import { Navbar } from "../../components/Navbar/Navbar.jsx"
import { M2video } from "./mov1components/Video.jsx"
import { M2roles } from "./mov1components/Roles.jsx"
import { M1carousel } from "./mov1components/mov1carousel/M1carousel.jsx"
import { Footer } from "../../components/Footer/Footer.jsx"
const Mov2 = ()=>{
  return(
    <>
      <Navbar />
      <div className="main-container">
        <div className="movie-img"></div>
          <div className="information">
            <h1>Titanic</h1>
            <p className="mov1p">A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.</p>
            <p className="mov1p space" id="yellow">Year: <span>1997</span></p>
            <p className="mov1p" id="yellow">Director: <span>James Cameron</span></p>
            <p className="mov1p" id="yellow">Writers: <span>James Cameron</span></p>
            <p className="mov1p" id="yellow">Rating <span>7.9/10</span></p>
          </div>
      </div>
      <M2video/>
      <M2roles />
      <div className="carou-cont">
        <M1carousel />
      </div>
      <Footer />
    </>
  )
}

export { Mov2 }