import './specialist.css';

export default function Specialist(props) {
    const {itemname, phone, url} = props.members;
    return (
        <div class="card" style={{width: "18rem"}}>
            <img src={url} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{itemname}</h5>
                    <p class="card-text">{phone}</p>
                </div>
        </div>
    )
}
