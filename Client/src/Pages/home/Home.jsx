import "./home.css";

export default function Home() {
  return (
    <div className="homeWrapper">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img
              src={require("./img.jpg")}
              className="d-block carouselImg"
              alt="..."
            />
          </div>
          <div className="carousel-item active">
            <img
              src={require("./img3.webp")}
              className="d-block carouselImg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("./img5.png")}
              className="d-block carouselImg"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("./img9.jpg")}
              className="d-block carouselImg"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="homeWrapperInfo">
          <table>
            <tr>
              <td>
                <h2>Agriculture</h2>
              </td>
              <td>
                <img src={require("./agriculture_0.png")} alt="Wheat" />
              </td>
            </tr>
          </table>
          <div classMain="homeInfo">
            <p>Agriculture is the science, art, and business of cultivating plants
            and animals for food, fuel, fiber, and other products. It is an
            essential sector of the global economy, providing food and raw
            materials for a growing population. In modern agriculture, various
            technologies and practices are used to improve crop yields, minimize
            environmental impacts, and increase efficiency. These include the
            use of genetically modified organisms (GMOs), precision farming
            techniques, irrigation systems, and advanced machinery. Important
            factors in agriculture include soil health, water management, pest
            and disease control, and climate resilience. Farmers and researchers
            use various methods to monitor and manage these factors, such as
            soil testing, integrated pest management, and climate-smart
            agriculture. Information on agriculture can be found from various
            sources, including government agencies, universities, non-profit
            organizations, and industry groups. There are also many agricultural
            publications, websites, and online forums that provide news,
            research, and practical advice for farmers and other stakeholders in
            the agricultural sector.</p>
            <hr/>
            <p>Agriculture, with its allied sectors, is unquestionably the largest livelihood provider in India, more so in the vast rural areas. It also contributes a significant figure to the Gross Domestic Product (GDP). Sustainable agriculture, in terms of food security, rural employment, and environmentally sustainable technologies such as soil conservation, sustainable natural resource management and biodiversity protection, are essential for holistic rural development. Indian agriculture and allied activities have witnessed a green revolution, a white revolution, a yellow revolution and a blue revolution.</p>
          
          <hr/>
          <h3>Importance of Agriculture in Indian Economy:</h3>
          <ol type="1">
            <li>GDP Contribution: Agriculture contributes around 17-18% to India's Gross Domestic Product (GDP), making it one of the largest contributors to the country's economy.</li>
            <li>Employment Generation: According to the latest available data from the National Sample Survey Office (NSSO), agriculture employs around 44% of the country's total workforce.</li>
            <li>Food Security: Agriculture is the backbone of food security in India. The country is home to over 1.3 billion people, and agriculture provides food for the vast majority of the population.</li>
            <li>Export Earnings: India is a major exporter of agricultural products, including rice, wheat, spices, tea, and cotton. Agriculture exports contribute significantly to the country's foreign exchange earnings.</li>
            <li>Rural Development: The agriculture sector is predominantly rural, and its development can have a significant impact on the overall development of rural areas.</li>
            <li>Poverty Reduction: Agriculture can play a key role in reducing poverty in India, especially in rural areas where poverty rates are high.</li>
          </ol>
          <h3>
            Important Links:
          </h3>
          <ul>
          <li><a href="https://www.india.gov.in/website-ministry-agriculture-farmers-welfare">Website of Ministry of Agriculture & Farmers Welfare</a></li>
          <li><a href="https://www.india.gov.in/departments-agriculture-states-and-union-territories">Departments of Agriculture of states and Union Territories</a></li>
          <li><a href="https://www.india.gov.in/website-department-animal-husbandry-dairying-and-fisheries-0">Website of Department of Animal Husbandry Dairying and Fisheries</a></li>
          <li><a href="https://www.india.gov.in/website-directorate-cashewnut-cocoa-development">Website of Directorate of Cashewnut & Cocoa Development</a></li>
          <li><a href="https://www.india.gov.in/farmers-portal">Farmers' Portal</a></li>
          </ul>

          </div>

        </div>
      </div>
    </div>
  );
}
