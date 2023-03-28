import "./crop.css";

export default function Crop(props) {
    const {name, url, text} = props.crop
    return (
        <div class="card" style={{ width: "20rem" }}>
            <img src={url} class="card-img-top"alt="Image"/>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{text}</p>
                <a href="/" class="btn btn-lg">General Information</a>
            </div>
        </div>
    );
}
