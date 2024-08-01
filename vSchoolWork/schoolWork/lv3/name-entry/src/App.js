import React from "react"
import './App.css';

function App() {
  // state for the form
  const [formData, setFormData] = React.useState(
    {
      guestName: ""
    })
  // defining the list
  const [list, setList] = React.useState([])

  //  
  function handleChange(event) {
    event.preventDefault()
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setList(prevList => [formData.guestName, ...prevList])
  }


  return (
    <div className="App">
      <h1>Name Entry Assignment</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          id="myText"
          placeholder="Type Name"
          onChange={handleChange}
          name="guestName"
          value={formData.guestName}
        />
        <h1></h1>
        <button className="form--button">Submit</button>
        <ul>
          {list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App
