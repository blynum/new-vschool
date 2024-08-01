import React from "react"
import './App.css';

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    comments: ""
  })

  const [formItems, setFormItems] = React.useState([]);

  const handleChange = (event) => {
    setFormData({
      ...
      formData, [event.target.name]: event.target.value
    })
  }
  console.log(formData)

  const handleSubmit =
    (event) => {
      event.preventDefault()
      console.log(formData);

      setFormItems(prevFormItems => {
        return [...prevFormItems,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          placeOfBirth: formData.placeOfBirth,
          phone: formData.phone,
          favoriteFood: formData.favoriteFood,
          comments: formData.comments
        }]
      })
    }

  const addToList = formItems.map(formItem => {
    return (
      <h1>{formItem.firstName}</h1>
      // <h1>{formItem.lastName}</h1>,
      // <h2>{formItem.email}</h2>,
      // <h2>{formItem.placeOfBirth}</h2>,
      // <h2>{formItem.phone}</h2>,
      // <h2>{formItem.favoriteFood}</h2>,
      // <h2>{formItem.comments}</h2>

    )
  })


  return (
    <div className="form-container">
      <header>Name Badge Assignment</header>
      <form onSubmit={handleSubmit} className="form">
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
        <input
          type="text"
          placeholder="Place of Birth"
          onChange={handleChange}
          name="placeOfBirth"
          value={formData.placeOfBirth}
        />
        <input
          type="tel"
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
          value={formData.phone}
        />
        <input
          type="text"
          placeholder="Favorite Food"
          onChange={handleChange}
          name="favoriteFood"
          value={formData.favoriteFood}
        />
        <textarea
          className="form--textArea"
          placeholder="Tell Us About Yourself"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
        />
        <button className="form--button">Submit</button>

      </form>
      {addToList}

    </div>
  );
}

export default App;
