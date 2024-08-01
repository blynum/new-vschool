import React from "react"

function List({ person }) {
    //map over each added person on list
    return (
        <>
            {person.map((people) => (
                <p>{people.name}</p>
            )
            )}
        </>
    )
}

export default List;