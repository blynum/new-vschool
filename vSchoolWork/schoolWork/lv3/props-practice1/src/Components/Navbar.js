import React from "react"
import logo from "../images/airbnb.png"


function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo" className="nav--logo" />
        </nav>

    )
}

export default Navbar