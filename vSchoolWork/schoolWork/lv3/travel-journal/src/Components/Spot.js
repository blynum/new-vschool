import React from "react"

function Spot(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <p>{props.map}</p>
            <h2>{props.start}</h2>
            <h2>{props.end}</h2>
            <p>{props.description}</p>
            <img src={props.img} />
            <hr />
        </div>
    )
}

export default Spot