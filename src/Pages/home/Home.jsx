import "./home.css";

export default function Home() {
  return (
    <div className="homeWrapper">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("./img0.jpg")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("./img1.jpg")} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={require("./img2.jpg")} className="d-block w-100" alt="..." />
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
      <div className="homeWrapperInfo">
        <div className="homeWrapperInfoIntro">
          <p>
            Modern farmers have a huge range of equipment options for the various activities they do on an annual basis. From high-tech combine harvesters to simple tractors, the various kinds of farm equipment available can meet the needs of small-scale homesteaders and industrial-size farming operations alike. However, it can be difficult to keep track of all the options. New farmers especially may wonder what the different types of farming machinery are for. For small- and mid-size farms especially, determining the different types of farming machinery you may need to make your operations more efficient can be frustrating.

            While all the equipment available may seem confusing, knowing about the basic farm equipment options can be an enormous help. If you're looking into purchasing new or used farm equipment, take a look at this guide. We'll go over the different types of agricultural machines and their uses, as well as some of the options for small, mid-size and large-scale farming operations.
          </p>
        </div>
        <div className="homeWrapperInfoVehicles">
          <div className="homeWrapperInfoFarm">
            <h2>FARMING VEHICLES</h2>
            <img className="homeWrapperInfoImg" src={require("./Farming-Vehicles.jpg")} alt="" />
            <p>
              Of the different types of farm equipment and their uses, vehicles are the most important and represent the largest investment. While a truck is often a staple of farming life, there are several other farm-specific vehicles, too.
            </p>
          </div>
          <div className="homeWrapperInfoFarm">
            <h2>1. Tractors</h2>
            <p>
              To say that "tractor" is a broad category is an understatement. The tractor is ubiquitous in the farming world, and it comes in a range of sizes to fit any farming operation. The primary purpose of a tractor is to pull farm equipment, but modern tractors can be outfitted with a variety of attachments to suit just about any farming need. For this reason, tractors are common-sense purchases for small and large-scale farmers alike.
            </p>
            <img className="homeWrapperInfoImg" src={require("./Tractors.jpg")} alt="" />
            <p>There are several types of tractors, including the following:</p>
            <ul>
              <li>Compact tractors: Compact tractors, as their name implies, are small, high-powered tractors that can assist with all the basic functions needed on a farm. Compact tractors are ideal for material handling and working in tight spaces where traditional tractors can't fit.</li>
              <li>Wheeled tractors: Wheeled tractors are general-purpose tractors that help you get the most out of your machinery. These utility tractors can meet a variety of demands and can be outfitted for tilling, material handling and equipment pulling. With a range of options in horsepower, lifting capacity, control and cab style, you can choose the wheeled tractor that works best for you and your application.</li>
              <li>Track tractors: Track tractors are farming vehicles mounted with rubber tracks instead of tires, allowing them to plow fields with more power while providing a smoother ride for the operator.</li>
              <li>Orchard tractors: Orchard tractors are a special type of tractor adapted with features to work optimally in orchards. These slender tractors can more easily fit between lines of trees while still providing the power needed to do landscaping and maintenance.</li>
            </ul>
          </div>
          <div className="homeWrapperInfoCom">
            <h2>2. Combine or Harvester</h2>
            {/* <img src={require("")} alt="" /> */}
          </div>
          <h2>3. ATV or UTV</h2>
        </div>
        <h2>TRACTOR ATTACHMENTS</h2>
        <h2>1. Plows</h2>
        <h2>2. Fertilizer Spreaders</h2>
        <h2>3. Seeders</h2>
        <h2>4. Balers</h2>
        <h2>5. Wagons or Trailers</h2>
        <h2>6. Other Tractor Attachments</h2>
      </div>
    </div>
  )
}
