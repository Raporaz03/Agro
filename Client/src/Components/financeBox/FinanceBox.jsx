import React from 'react'

export default function FinanceBox(props) {
    const {url, title, text} = props.schemes
  return (
    <div className="financeItem">
    <div className="card" item="card1" style={{ width: "20rem" }}>
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="/" className="btn btn-lg">Go somewhere</a>
      </div>
    </div>
  </div>
  )
}
