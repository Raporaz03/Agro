import './product.css';

export default function Product(props) {
    const {itemname, sellername, url, price} = props.features;
    console.log(props.features)
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={url} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{itemname}</h5>
                    <p class="card-text">{sellername}</p>
                    <p class="card-text">{price}</p>
                </div>
        </div>
    )
}
