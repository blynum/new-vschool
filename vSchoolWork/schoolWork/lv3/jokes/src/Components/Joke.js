import React from "react"

function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        // console.log(isShown)
        setIsShown(prevShown => !prevShown)

    }
    return (
        <div>
            {props.setup && <h3> {props.setup}</h3>}
            {/* Only display the punchline if the 'isShown' is true - practice Condidtional Rendering */}
            {isShown && < p > {props.punchline}</p>}
            {props.upvote}
            {/* {isShown && <button onClick={toggle}>Hide Punchline</button>}
            {!isShown && <button onClick={toggle}>Show Punchline</button>} */}
            <button onClick={toggle}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div >
    )
}

export default Joke

