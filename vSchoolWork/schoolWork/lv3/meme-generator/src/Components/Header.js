import React from "react"
import Troll from "../images/troll.png"

function Header() {
    return (
        <header>
            <img src={Troll} className="header--pic" />
            <h1 className="header--title">Meme Generator</h1>
            <h2 className="header--subTitle">React Course - Project 3</h2>
        </header>
    )
}

export default Header