import React, { useState } from "react"

function Form(props) {
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        comments: ""
    })

    const handleChange = (e) => {
        const { value, name } = e.target
        setContactInfo((prevContactInfo) => {
            return {
                ...prevContactInfo,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Was Submitted")
        // passing in the new state, i.e. "contactInfo"
        props.addEntryToList(contactInfo)
        setContactInfo({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            comments: ""

        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" required
                    name="firstName"
                    placeholder="firstName"
                    value={contactInfo.firstName}
                    onChange={handleChange} />

                <input
                    type="text" required
                    name="lastName"
                    placeholder="lastName"
                    value={contactInfo.lastName}
                    onChange={handleChange} />

                <input
                    type="text" required
                    name="email"
                    placeholder="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                    minLength="5" />

                <input
                    type="text" required
                    name="placeOfBirth"
                    placeholder="placeOfBirth"
                    value={contactInfo.placeOfBirth}
                    onChange={handleChange}
                    minLength="5" />

                <input
                    type="tel" required
                    name="phone"
                    placeholder="phoneNumber"
                    value={contactInfo.phone}
                    onChange={handleChange}
                />

                <input
                    type="text" required
                    name="favoriteFood"
                    placeholder="favoriteFood"
                    value={contactInfo.favoriteFood}
                    onChange={handleChange} />

                <textarea
                    className="form--textArea"
                    type="text" required
                    name="comments"
                    placeholder="comments"
                    value={contactInfo.comments}
                    onChange={handleChange} />

                <button
                    type="submit"
                    className="form--button"
                >Submit
                </button>

            </form>
        </div>
    )
}

export default Form