import React from "react"
import Spot from "./Spot"
import data from "./data"
import "./style.css"


function App() {
    const vacayData = data.map(spot => {
        return <Spot
            place={spot.place}
            price={spot.price}
            timeToGo={spot.timeToGo}
        />
    })
    return (
        <div>
            <h1 className="app--title">5 Top Vacation Spots</h1>
            {vacayData}
        </div>
    )

}

export default App