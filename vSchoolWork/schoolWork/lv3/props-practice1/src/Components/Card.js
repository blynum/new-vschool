import React from "react"
import star from "../images/star.png"

function Card(props) {
    // Conditional Rendering
    let badgeText
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {/* {props.spots === 0 && <div className="card--badge">"SOLD OUT"</div>} */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.card.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount})•</span>
                <span className="gray">{props.card.location}</span>
                <p className="card--title">{props.card.title}</p>
                <p className="card--price"><span className="bold">From ${props.card.price}</span>/person</p>
            </div>
        </div>
    )
}

export default Card