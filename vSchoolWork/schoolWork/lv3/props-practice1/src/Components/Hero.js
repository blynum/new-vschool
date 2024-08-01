import React from "react"
import group from "../images/group.png"

function Hero() {
    return (
        <div className="hero">
            <img src={group} alt="group" className="hero--pic" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero