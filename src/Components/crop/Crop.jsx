import "./crop.css";

export default function Crop() {
    return (
        <div class="card m-4" style={{ width: "20rem" }}>
            <img
                src={
                    "https://www.agric.wa.gov.au/sites/gateway/files/AdobeStock_113261787.jpeg"
                }
                class="card-img-top"
                alt="Image"
            />
            <div class="card-body">
                <h5 class="card-title">Wheat</h5>
                <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <a href="/" class="btn">
                    General Information
                </a>
                <a href="/" class="btn">
                    Seed Varieties
                </a>
            </div>
        </div>
    );
}
