// src/Form.jsx
import React, { useState, useContext } from "react";
import { UglyThingsContext } from "./UglyThingsContext";

function Form() {
  const { addUglyThing } = useContext(UglyThingsContext);
  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addUglyThing({ imgUrl, title, description });
    setImgUrl("");
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Img URL"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
