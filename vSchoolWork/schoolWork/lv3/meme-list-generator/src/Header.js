import React from "react"
import TrollFace from "./Troll Face.png"
import "./Header.css"


export default function Header() {
    return (
        <>
            <div className = "header-container">
                <div className = "header-main">
                    <img className = "troll-face" src = {TrollFace} />
                    <h1 className = "header">Meme Generator</h1>
                </div>
                <p>React Course - Project 3</p>
            </div>
        </>
    )
}