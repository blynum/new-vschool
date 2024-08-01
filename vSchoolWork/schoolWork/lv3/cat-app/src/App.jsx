import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Contact
        img="src/assets/mr-whiskerson.png"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="src/assets/fluffykins.png"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
       img="src/assets/felix.png" 
       name="Felix"
       phone="(212) 555-4567"
       email="pumpkin@scrimba.com" 
      />

      <Contact 
       img="src/assets/pumpkin.png" 
       name="Pumpkin"
       phone="(0800) CAT KING"
       email="pumpkin@scrimba.com"
      
      />
    </>
  );
}

export default App;
