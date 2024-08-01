import React from "react"
import NavBar from "./NavBar"

function Header() {
    return (
        <header>
            <NavBar />
            <img src="http://p3bmii.org/asset/img/home-bg.jpg" className="header--pic" />
            <div className="header--text">
                <h1 className="header--title">Clean Blog</h1>
                <h2 className="header--subTitle">A Blog Theme by Start Bootstrap</h2>
            </div>

        </header>
    )
}

export default Header