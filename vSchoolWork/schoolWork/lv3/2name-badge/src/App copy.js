import React, { useState } from "react"
import './App.css';
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
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    comments: ""
  })

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

  const handleChange = (e) => {
    const { value, name } = e.target
    setContactInfo((prevContactInfo) => {
      return {
        ...prevContactInfo,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Was Submitted")
    // passing in the new state, i.e. "contactInfo"
    setBadgeList(prev => [...prev, contactInfo])
    setContactInfo({
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      comments: ""

    })

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text" required
          name="firstName"
          placeholder="firstName"
          value={contactInfo.firstName}
          onChange={handleChange} />

        <input
          type="text" required
          name="lastName"
          placeholder="lastName"
          value={contactInfo.lastName}
          onChange={handleChange} />

        <input
          type="text" required
          name="email"
          placeholder="email"
          value={contactInfo.email}
          onChange={handleChange}
          minLength="5" />

        <input
          type="text" required
          name="placeOfBirth"
          placeholder="placeOfBirth"
          value={contactInfo.placeOfBirth}
          onChange={handleChange}
          minLength="5" />

        <input
          type="tel" required
          name="phone"
          placeholder="phoneNumber"
          value={contactInfo.phone}
          onChange={handleChange}
        />

        <input
          type="text" required
          name="favoriteFood"
          placeholder="favoriteFood"
          value={contactInfo.favoriteFood}
          onChange={handleChange} />

        <textarea
          className="form--textArea"
          type="text" required
          name="comments"
          placeholder="comments"
          value={contactInfo.comments}
          onChange={handleChange} />

        <button
          type="submit"
          className="form--button"
        >Submit
        </button>
      </form>
      {listOfBadges}
    </div>
  );
}

export default App;
