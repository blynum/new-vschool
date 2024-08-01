import Nav from "./Components/NavBar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <>
      <Nav />
      <Hero />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
