import React from "react"

function Pet(props) {
    return (
        <div>
            <h2>Pet's Name: {props.name}</h2>
            <h2>Pet's Breed: {props.breed}</h2>
        </div>
    )
}

export default Pet