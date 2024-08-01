import React from "react"
import facebook from "../images/facebook-brands.svg"
import twitter from "../images/twitter-brands.svg"
import github from "../images/github-brands.svg"

function Footer() {
    return (
        <footer className="footer">
            <div className="footer--icons">
                <img src={facebook} />
                <img src={twitter} />
                <img src={github} />
            </div>
            <p className="footer--text"><em>Copyright</em> © Your Website 2021</p>

        </footer>

    )
}

export default Footer