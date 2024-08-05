import React, { useContext, useState } from "react";
import { UglyThingsContext } from "./UglyThingsContext";

function UglyThingsList() {
  const { uglyThings, deleteUglyThing, editUglyThing } =
    useContext(UglyThingsContext);
  const [editing, setEditing] = useState(null);

  const handleEdit = (item) => {
    setEditing(item);
  };

  const handleUpdate = (updatedItem) => {
    editUglyThing(updatedItem._id, updatedItem);
    setEditing(null);
  };

  return (
    <div>
      {uglyThings.map((thing) => (
        <div key={thing._id} className="ugly-thing-item">
          <h3>{thing.title}</h3>
          <img src={thing.imgUrl} alt={thing.title} />
          <p>{thing.description}</p>
          <button onClick={() => deleteUglyThing(thing._id)}>Delete</button>
          <button onClick={() => handleEdit(thing)}>Edit</button>

          {/* Display edit form under the image if the item is being edited */}
          {editing && editing._id === thing._id && (
            <EditForm
              thing={editing}
              onUpdate={handleUpdate}
              onCancel={() => setEditing(null)}
            />
          )}
        </div>
      ))}
    </div>
  );
}

function EditForm({ thing, onUpdate, onCancel }) {
  const [imgUrl, setImgUrl] = useState(thing.imgUrl);
  const [title, setTitle] = useState(thing.title);
  const [description, setDescription] = useState(thing.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...thing, imgUrl, title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
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
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default UglyThingsList;
