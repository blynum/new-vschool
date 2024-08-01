import React from "react"
import Friend from "./Friend"
import data from "./frienddata"


function FriendList() {
    const friendData = data.map((friend, index) => {
        return (
            <Friend
                key={friend + index}
                name={friend.name}
                age={friend.age}
                pets={friend.pets}

            />
        )
    })
    return (
        <div>
            {friendData}
        </div>
    )
}

export default FriendList