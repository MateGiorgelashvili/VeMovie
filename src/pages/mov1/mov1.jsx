import "./mov1.css"
import { Navbar } from "../../components/Navbar/Navbar.jsx"
import { Video } from "./mov1components/Video.jsx"
import { Roles } from "./mov1components/Roles.jsx"
import { M1carousel } from "./mov1components/mov1carousel/M1carousel.jsx"
import { Footer } from "../../components/Footer/Footer.jsx"
const Mov1 = ()=>{
  return(
    <>
      <Navbar />
      <div className="main-container">
        <div className="movie-img"></div>
          <div className="information">
            <h1>Black Panther</h1>
            <p className="mov1p">After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther -- gets tested when he's drawn into a conflict that puts the fate of Wakanda and the entire world at risk.</p>
            <p className="mov1p space" id="yellow">Year: <span>2018</span></p>
            <p className="mov1p" id="yellow">Director: <span>Ryan Coogler</span></p>
            <p className="mov1p" id="yellow">Writers: <span>Ryan Coogler - Joe Robert Cole - Stan Lee</span></p>
            <p className="mov1p" id="yellow">Rating <span>7.3/10</span></p>
          </div>
      </div>
      <Video/>
      <Roles />
      <div className="carou-cont">
        <M1carousel />
      </div>
      <Footer />
    </>
  )
}

export { Mov1 }