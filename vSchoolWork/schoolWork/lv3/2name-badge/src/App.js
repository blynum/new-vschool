import React, { useState } from "react"
import './App.css';
import Form from "./Components/Form"
import Badge from "./Components/Badge";

// 1. Create form that will accept user input (firstname, lastname, number, etc...)

// 2. Save is entry to name badge list, which is in state
// - create badge State
// - handleSubmit function that that takes state and add it ot the list of badge entries

// 3. Render each person object => badge component
function App() {

  const [badgeList, setBadgeList] = useState([
    // setting deafult intial state
    {
      firstName: "Jane",
      lastName: "Doe",
      email: "jdoe@gmail",
      placeOfBirth: "China",
      phone: "4546784590",
      favoriteFood: "Pizza",
      comments: "I love watching TV"
    }
  ])

  const listOfBadges = badgeList.map((badge, index) =>
    <Badge
      key={index + badge}
      firstName={badge.firstName}
      lastName={badge.lastName}
      email={badge.email}
      placeOfBirth={badge.placeOfBirth}
      phone={badge.phone}
      favoriteFood={badge.favoriteFood}
      comments={badge.comments}
    />
  )

  // Make this available to the form component, so that the handle submit function can call this function, so it needs to be passed down as a prop to the form component
  const addEntryToList = (newBadgeEntry) => {
    setBadgeList(prevEntries => [...prevEntries, newBadgeEntry])

  }
  return (
    <div className="App">
      <Form addEntryToList={addEntryToList} />
      {listOfBadges}
    </div>
  );
}

export default App;
