import "./home.css";

export default function Home() {
  return (
    <div className="homeWrapper">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={require("./img.jpg")} className="d-block carouselImg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("./img3.webp")} className="d-block carouselImg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("./img5.png")} className="d-block carouselImg" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("./img9.jpg")} className="d-block carouselImg" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
