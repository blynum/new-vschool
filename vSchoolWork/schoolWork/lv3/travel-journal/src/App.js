import React from "react"
import data from "./data"
import "./App.css"
import Spot from "./Components/Spot.js"
import globe from "./images/globe.png"


function App() {
  const favSpots = data.map(spot => {
    return <Spot
      title={spot.title}
      location={spot.location}
      maps={spot.googleMapsUrl}
      start={spot.startDate}
      end={spot.endDate}
      description={spot.description}
      img={spot.imageUrl}

    />
  })
  return (
    <div className="App">
      <header>
        <img src={globe} />
        <span>my travel journal</span>
      </header>
      {favSpots}

    </div>
  );
}

export default App;
