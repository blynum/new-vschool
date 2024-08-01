import React from "react"
import Pet from "./Pet"
// import data from './frienddata'


function Friend(props) {
    console.log(props.pets)
    const pets = props.pets.map((pet, index) => {
        return (
            <Pet
                key={pet + index}
                name={pet.name}
                breed={pet.breed}
            />
        )
    }
    )

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Pets</h1>
            {pets}
        </div>
    )
}

export default Friend