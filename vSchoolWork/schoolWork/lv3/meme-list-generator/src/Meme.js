import React from "react"
import MemeListItem from "./MemeListItem"
import "./Meme.css"


const axios = require("axios");
export default function Meme(){
    //Setting up state
    const defaultMeme = {
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg",
    }

    //initalize state
    const [meme, setMeme] = React.useState(defaultMeme)
    const [allMemes, setAllMemes] = React.useState([]) //access to all memes in image flip data-base
    const [memesList, setMemesList] = React.useState([]) // saved memes List
  
 
    const memesListElements = memesList.map((meme, index) => {
        return <MemeListItem key = {index} {...meme} index={index} onEditSave = {edited} onDelete= { () => deleted(index) }/>
    })
   
    // Getting images from API
    React.useEffect(()=>{
        axios.get("https://api.imgflip.com/get_memes")
            .then(res=> setAllMemes(res.data.data.memes))
            .catch(err => console.log(err))
        },[]
    )
    
    // Handling change, submit, and updating state.
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme=> ({...prevMeme, [name]: value}))
    }
    function getMemeImage(){
        // Do we need -1 for .length so the random isn't set to empty index?
        const random = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[random].url
        // const id = allMemes[random].id
        setMeme(prevMeme=> ({...prevMeme, randomImage: url}))     
    }

    // Handling Save -- returning prevMemesList and passing the props to the MemeListItemComponent
    function handleSave() {
        setMemesList(prevMemesList => {
            return [ 
                ...prevMemesList,
                {
                    topText: meme.topText,
                    bottomText: meme.bottomText,
                    randomImage: meme.randomImage,
                }
            ]
        })
        setMeme(defaultMeme) // returns inputs and img to default values
    }

    //Handling the delete functionality
        function deleted(index) {
        setMemesList(memesList.filter(function(meme, pos){
            return pos !== index 
        }))
    }


    // EDIT FUNCTION
    function edited(index, edits) {
        setMemesList(prevMemesList => {
           return prevMemesList.map((meme, pos) => {
              return  pos === index ? edits : meme
            }) 
        })
}
       
    
    
    // JSX
    return (
        <>
        <form className="form">
            <input 
                name= "topText"
                onChange ={handleChange}
                placeholder = "Top Text"
                className="form-input"
                value = {meme.topText}
            />
             <input 
                name= "bottomText"
                onChange ={handleChange}
                placeholder = "Bottom Text"
                className="form-input"
                value = {meme.bottomText}
            />
        </form>
        <button onClick={getMemeImage} className = "button">Get New Meme Image</button>
        <div className="meme-container">
            <img src={meme.randomImage} className = "meme-img"/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
        <button onClick={handleSave} className = "button">SAVE MEME</button>
         <div>
             {memesListElements}
         </div>
        </>
    )
}