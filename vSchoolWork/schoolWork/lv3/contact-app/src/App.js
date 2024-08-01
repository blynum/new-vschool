import React from "react"
import Card from "./Components/Card"
import "./App.css"
import phone from "./images/phone.png"
import cat from "./images/cat.png"
import email from "./images/mail.png"
import cat1 from "./images/blackcat.jpeg"
import cat2 from "./images/graycat.png"
import cat3 from "./images/orangecat.jpeg"


function App() {
    return (
        <div>
            <h1>Molly's Contacts</h1>
            <Card
                profilePic={cat}
                name="Mr. Whiskerson"
                phoneicon={phone}
                phone="(212) 555-1234"
                emailicon={email}
                email="mr.whiskaz@catnap.meow"
            />
            <Card
                profilePic={cat1}
                name="Fluffykins"
                phoneicon={phone}
                phone="(212) 555-2345"
                emailicon={email}
                email="fluff@me.com"
            />
            <Card
                profilePic={cat2}
                name="Felix"
                phoneicon={phone}
                phone="(212) 555-4567"
                emailicon={email}
                email="thecat@hotmail.com"
            />
            <Card
                profilePic={cat3}
                name="Pumpkin"
                phoneicon={phone}
                phone="(0800) CAT KING"
                emailicon={email}
                email="pumpkin@scrimba.com"


            />
        </div>
    )
}

export default App