import { useState } from "react";

export default function BadgeForm({ addContact }) {

    const [contactInfo, setContactInfo] = useState({
        //declare objects that will be in form
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        contacts: ""
    });

    //handle change takes input and applies it to the property
    const handleChange = (event) => {
        // callback function to preserve the values of the other fields
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    };

    /*add contact function from app.js is passed in to our submit function
    will take in our contact info as a parameter
    set contactInfo will be set to all empty strings*/

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact(contactInfo);


        //after we submit it will be empty fields again
        setContactInfo({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favoriteFood: "",
            comments: ""

        });
    };

    return (

        //form
        //prac
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
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
                    type="number" required
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    value={contactInfo.phoneNumber}
                    onChange={handleChange}
                    minLength="5" />

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

                <button className="form--button">Submit</button>
            </form>


        </div>
    );
}