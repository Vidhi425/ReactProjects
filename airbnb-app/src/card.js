import React from "react";

export default function Card(props) {
    
    return (
        <div className="card">
            <img src={props.img} className="card-image"></img>
            <div className="card-stats">
                <img src="download.png" className="card-stars"></img>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) *</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p><span className="bold">From ${props.price} / person</span></p>
        </div>
    )
}