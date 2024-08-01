import React from "react"

function Spot(props) {
    console.log(props)
    return (
        <div className="spot">
            <h1 className="spot--title">{props.place}</h1>
            <h2 className="spot--price">{props.price}</h2>
            <h3 className="spot--time">{props.timeToGo}</h3>
            <hr />
        </div>
    )
}

export default Spot 