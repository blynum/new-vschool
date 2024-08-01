import React from "react"


function Card(props) {
    console.log(props)
    return (
        <div className="contacts">
            <div className="contact--card">
                <img src={props.profilePic} className="cat" />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={props.phoneicon} className="phone" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    {/* <img src={cat} className="cat" /> */}
                    <img src={props.emailicon} />
                    <p>{props.email}</p>
                </div>

            </div>

        </div>
    )
}

export default Card