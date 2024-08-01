import React from "react"
import './App.css';
import Header from "./Components/Header"
import Meme from "./Components/Meme"

function App() {
  const [memes, setMemes] = React.useState([]);
  const [editingMemeIndex, setEditingMemeIndex] = React.useState(null);

  const addMeme = (newMeme) => {
    if (editingMemeIndex !== null) {
      setMemes(memes.map((meme, index) => (index === editingMemeIndex ? newMeme : meme)));
      setEditingMemeIndex(null);
    } else {
      setMemes([...memes, newMeme]);
    }
  };

  const deleteMeme = (index) => {
    setMemes(memes.filter((_, i) => i !== index));
  };

  const editMeme = (index) => {
    setEditingMemeIndex(index);
  };

  return (
    <div className="App">
      <Header />
      <Meme addMeme={addMeme} editingMeme={editingMemeIndex !== null ? memes[editingMemeIndex] : null} />
      <div className="meme-list">
        {memes.map((meme, index) => (
          <div key={index} className="meme-item">
            <img src={meme.randomImage} alt="Meme" className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            <button onClick={() => editMeme(index)}>Edit</button>
            <button onClick={() => deleteMeme(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
