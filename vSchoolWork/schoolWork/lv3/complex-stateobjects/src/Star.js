import React from "react"
import star from "./images/star.png"
import starE from "./images/star-empty.png"

function Star(props) {
    const starIcon = props.isFilled ? star : starE
    return (
        <div>
            <img
                src={starIcon}
                className="card--favorite"
                onClick={props.handleClick}
            />
        </div>
    )
}

export default Star