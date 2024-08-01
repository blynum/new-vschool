import React from "react"
import "./MemeListItem.css"

export default function MemeListItem(props) {

    const [edits, setEdits] = React.useState({
        topText : "",
        bottomText: "",
        randomImage : props.randomImage
    })
    // state for the isEditing toggle
    const [isEditing, setIsEditing] = React.useState(false)


    function handleEditChange(event){
        const {name, value} = event.target
        setEdits(prevEdits => ({...prevEdits, [name]: value}))
    }

    function handleEditSave() {
         setIsEditing(!isEditing)
        props.onEditSave(props.index, edits)
    }
    return (
        <>
            <div className = "list-item-container">
                <img src = {props.randomImage} className = "list-item-img"/>
                {isEditing === true ? <input className = "list-item-text top edit"  value = {edits.topText} name = "topText" onChange = {handleEditChange}/> : <h2 className = "list-item-text top">{props.topText}</h2>} 
                {isEditing === true ? <input className = "list-item-text bottom edit" value = {edits.bottomText} name = "bottomText" onChange = {handleEditChange}/> : <h2 className = "list-item-text bottom">{props.bottomText}</h2>}
            </div>
            <button onClick ={props.onDelete} className = "meme-button">DELETE</button>
            {isEditing === true ? <button className = "meme-button" onClick = {handleEditSave}>SAVE</button> : <button onClick = {() =>setIsEditing(!isEditing)} className = "meme-button">EDIT</button>}
        </>
    )
}