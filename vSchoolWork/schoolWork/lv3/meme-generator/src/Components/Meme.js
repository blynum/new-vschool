import React, { useEffect, useRef } from "react"
// import memesData from "../memeData"

function Meme({ addMeme, editingMeme }) {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })

    // const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [allMemeImages, setAllMemeImages] = React.useState([])
    const isFirstRender = useRef(true);

    /**
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. 
*/

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        if (editingMeme) {
            setMeme(editingMeme);
        }
    }, [editingMeme]);

    /* console.log(allMemeImages) */


    function getMemeImage() {
        // const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

        // const url = 
        // console.log(url)
    }



    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (meme.randomImage) {
            addMeme(meme);
            setMeme({ topText: "", bottomText: "", randomImage: "" });
        } else {
            alert("Please generate a meme image first!");
        }
    };



    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top Text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange} />

                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottonText}
                    onChange={handleChange} />

                <button onClick={getMemeImage} className="form--button">
                    Get a new meme image 🖼
                </button>
                <button onClick={handleSubmit} className="form--button">
                    {editingMeme ? "Update Meme" : "Add Meme"}
                </button>
            </div>
            {meme.randomImage && (
                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" alt="Meme" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            )}
        </main>
    )
}

export default Meme