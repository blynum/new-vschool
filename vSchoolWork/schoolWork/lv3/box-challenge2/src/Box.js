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

function Box(props) {
    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    return (
        <div style={styles} className="box" onClick={toggle}>

        </div>

    )
}

export default Box