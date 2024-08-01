import React from 'react';



function Badge(props) {
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <h2>Email: {props.email}</h2>
            <h2>Place of Birth: {props.placeOfBirth}</h2>
            <h2>Phone Number: {props.phone}</h2>
            <h2>Favorite Food: {props.favoriteFood}</h2>
            <h2>Comments: {props.comments}</h2>
            <hr></hr>

        </div>
    );
}

export default Badge;

