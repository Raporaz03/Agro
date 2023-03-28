import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <div style={{ display: "flex", position: "absolute", bottom: "20px", right: "20px" }}>
                        <span className="badge rounded bg-success">{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://assets.telecomtv.com/assets/telecomtv/apple-sos-15523.jpeg?w=1200" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        );
    }
}