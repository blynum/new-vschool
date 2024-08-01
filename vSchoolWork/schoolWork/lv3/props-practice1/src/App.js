import React from "react"
import data from "./data"
import './style.css';
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"


function App() {
  const cards = data.map(card => {
    return <Card
      key={card.id}
      card={card}
    // title={card.title}
    // description={card.description}
    // price={card.price}
    // img={card.coverImg}
    // rating={card.stats.rating}
    // reviewCount={card.stats.reviewCount}
    // location={card.location}
    // openSpots={card.openSpots}
    />

  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>


    </div>
  );
}

export default App;
