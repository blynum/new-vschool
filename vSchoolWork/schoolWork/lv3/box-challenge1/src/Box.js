import React from "react"

/**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

/**
     * Challenge part 3: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */



function Box(props) {
    // console.log(props.on)

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    // const [on, setOn] = React.useState(props.on)

    // const styles = {
    //     backgroundColor: on ? "#222222" : "transparent"
    // }

    // function toggle() {
    //     setOn(prevOn => !prevOn)}
    return (
        <div style={styles} className="box">

        </div>

    )
}

export default Box