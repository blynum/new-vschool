// src/UglyThingsContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const UglyThingsContext = createContext();

function UglyThingsProvider({ children }) {
  const [uglyThings, setUglyThings] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.vschool.io/belitalynum/thing")
      .then((response) => setUglyThings(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addUglyThing = (newThing) => {
    axios
      .post("https://api.vschool.io/belitalynum/thing", newThing)
      .then((response) => setUglyThings((prev) => [...prev, response.data]))
      .catch((error) => console.error(error));
  };

  const deleteUglyThing = (id) => {
    axios
      .delete(`https://api.vschool.io/belitalynum/thing/${id}`)
      .then(() =>
        setUglyThings((prev) => prev.filter((thing) => thing._id !== id))
      )
      .catch((error) => console.error(error));
  };

  const editUglyThing = (id, updatedThing) => {
    axios
      .put(`https://api.vschool.io/belitalynum/thing/${id}`, updatedThing)
      .then((response) =>
        setUglyThings((prev) =>
          prev.map((thing) => (thing._id === id ? response.data : thing))
        )
      )
      .catch((error) => console.error(error));
  };

  return (
    <UglyThingsContext.Provider
      value={{ uglyThings, addUglyThing, deleteUglyThing, editUglyThing }}
    >
      {children}
    </UglyThingsContext.Provider>
  );
}

export { UglyThingsContext, UglyThingsProvider };
