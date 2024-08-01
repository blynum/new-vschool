import React from "react"

//empty contacts array is passed into our function
export default function UserList({ contacts }) {


    //pass in all your propeties and then map over them
    return (
        <div>
            {contacts.map((contact) => (
                <div className="badge" key={contact.phoneNumber}>
                    <p>Name: {contact.firstName} {contact.lastName}</p>
                    <p>Email: {contact.email}</p>
                    <p>Place of Birith:{contact.placeOfBirth}</p>
                    <p>Phone Number:{contact.phoneNumber}</p>
                    <p>Favorite Food{contact.favoriteFood}</p>
                    <p>Comments: {contact.comments}</p>
                </div>
            ))}
        </div>
    );
}