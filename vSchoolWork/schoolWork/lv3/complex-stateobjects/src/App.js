import React, { useState } from "react"
import './App.css';
import woman from "./images/womendesk.png"
import Star from "./Star"

function App() {

  const [contact, setContact] = useState({
    firstName: "Jane",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  // let starIcon = contact.isFavorite ? star : starE


  function toggleFavorite() {
    setContact(prevContact => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite
      }
    })

  }


  return (
    <main>
      <article className="card">
        <img src={woman} className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />

          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>

      </article>
    </main>
  );
}

export default App;
