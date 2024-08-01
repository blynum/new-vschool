import React from "react"


function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }
    return (
        <div style={styles}
            className="box"
            // onClick={toggle}
            // onClick={() => props.toggle(props.id)}
            onClick={props.toggle}


        ></div>
    )
}

export default Box