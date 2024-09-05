import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // State for managing bounties
  const [bounties, setBounties] = useState([]);
  const [newBounty, setNewBounty] = useState({
    firstName: "",
    lastName: "",
    living: true,
    bountyAmount: 0,
    type: "Jedi",
  });

  // Fetch bounties on component mount
  useEffect(() => {
    axios
      .get("http://localhost:3000/bounty")
      .then((response) => {
        setBounties(response.data);
      })
      .catch((error) =>
        console.error("There was an error fetching the bounties!", error)
      );
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBounty({
      ...newBounty,
      [name]: value,
    });
  };

  // Handle form submission to create a new bounty
  const handleCreateBounty = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/bounty", newBounty)
      .then((response) => {
        setBounties([...bounties, response.data]);
        // Clear the form after submitting
        setNewBounty({
          firstName: "",
          lastName: "",
          living: true,
          bountyAmount: 0,
          type: "Jedi",
        });
      })
      .catch((error) => console.error("Error creating a bounty", error));
  };

  // Handle delete bounty
  const handleDeleteBounty = (id) => {
    axios
      .delete(`http://localhost:3000/bounty/${id}`)
      .then(() => {
        setBounties(bounties.filter((bounty) => bounty.id !== id));
      })
      .catch((error) => console.error("Error deleting bounty", error));
  };

  // Handle updating a bounty
  const handleUpdateBounty = (id) => {
    const updatedBounty = {
      firstName: "Updated First Name", // Update these values as per user input or a form
      lastName: "Updated Last Name",
      living: true,
      bountyAmount: 500000,
      type: "Jedi",
    };
    axios
      .put(`http://localhost:3000/bounty/${id}`, updatedBounty)
      .then((response) => {
        setBounties(
          bounties.map((bounty) => (bounty.id === id ? response.data : bounty))
        );
      })
      .catch((error) => console.error("Error updating bounty", error));
  };

  return (
    <div>
      <h1>Bounty Hunter Tracker</h1>

      {/* Form to Create a New Bounty */}
      <form onSubmit={handleCreateBounty}>
        <input
          type="text"
          name="firstName"
          value={newBounty.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={newBounty.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          required
        />
        <input
          type="number"
          name="bountyAmount"
          value={newBounty.bountyAmount}
          onChange={handleInputChange}
          placeholder="Bounty Amount"
          required
        />
        <select name="type" value={newBounty.type} onChange={handleInputChange}>
          <option value="Jedi">Jedi</option>
          <option value="Sith">Sith</option>
        </select>
        <button type="submit">Create Bounty</button>
      </form>

      {/* List of Bounties */}
      <ul>
        {bounties.map((bounty) => (
          <li key={bounty.id}>
            {bounty.firstName} {bounty.lastName} - ${bounty.bountyAmount} -{" "}
            {bounty.type} - {bounty.living ? "Alive" : "Dead"}
            <button onClick={() => handleDeleteBounty(bounty.id)}>
              Delete
            </button>
            <button onClick={() => handleUpdateBounty(bounty.id)}>
              Update
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
