import React from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true,
      employment: "",
      favoriteColor: ""

    })
  // const [lastName, setLastName] = React.useState("")

  // console.log(firstName)
  // console.log(formData)
  // console.log(formData.comments)
  // console.log(formData.employment)
  // console.log(formData.favoriteColor)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    // console.log(event.target.value)
    /**
        * Challenge: update the firstName state on every keystroke
        */
    // setFirstName(event.target.value)
    console.log(event.target.name)
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        // if the type of checkbox use checked, else use value
        [name]: type === "checkbox" ? checked : value
      }
    })

  }

  // console.log(lastName)

  // function handleChange2(event) {
  //   setLastName(event.target.value)
  // }
  // {

  // }

  function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}

      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}

      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      {/**
      * Challenge: Add a textarea for "comments" to the form
      * Make sure to update state when it changes.
    */}

      <textarea
        placeholder="Type Comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}

      />

      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />

      </fieldset>
      <br />

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favoriteColor"
      >
        <option value="">-- Choose Color --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br />
      <br />
      <button>Submit</button>

    </form>
  );
}

export default App;
