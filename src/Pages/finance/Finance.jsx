import "./finance.css";

export default function Finance() {
  return (
    <>
      <div className="financeWrapper">
        <div className="financeitem" id="fitem1">
          <div className="card" item="card1" style={{ width: "18rem" }}>
            <img src="https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/05/13172737/All-schemes-of-government-of-india.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Government Schemes</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="financeitem" id="fitem2">
          <div className="card" item="card2" style={{ width: "18rem" }}>
            <img src="https://i0.wp.com/whatiscomputer.in/wp-content/uploads/2020/06/NGO-1.png?fit=1280%2C720&ssl=1" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">NGO</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="financeitem" id="fitem3">
          <div className="card" item="card3" style={{ width: "18rem" }}>
            <img src="https://c.ndtvimg.com/2022-11/qovd224_image_625x300_11_November_22.jpg?ver-20230302.111" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Donation</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="financeitem" id="fitem4">
          <div className="card" item="card4" style={{ width: "18rem" }}>
            <img src="https://images.livemint.com/img/2022/03/07/1600x900/oped1_1646670646465_1646670652294.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Self Help Group</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
