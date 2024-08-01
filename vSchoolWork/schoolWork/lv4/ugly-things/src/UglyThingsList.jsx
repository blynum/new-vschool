// src/UglyThingsList.jsx
import React, { useContext } from "react";
import { UglyThingsContext } from "./UglyThingsContext";

function UglyThingsList() {
  const { uglyThings, deleteUglyThing, editUglyThing } =
    useContext(UglyThingsContext);

  return (
    <div>
      {uglyThings.map((thing) => (
        <div key={thing._id}>
          <h3>{thing.title}</h3>
          <img src={thing.imgUrl} alt={thing.title} />
          <p>{thing.description}</p>
          <button onClick={() => deleteUglyThing(thing._id)}>Delete</button>
          {/* Add edit functionality here */}
        </div>
      ))}
    </div>
  );
}

export default UglyThingsList;
