import React from "react"
import PropTypes from "prop-types"

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }

    return (
        <div style={styles}></div>
    )
}

// Challenge: Add prop types for the height and width. Make at least one of them required.
// Extra Challenge: Make it so your incoming cardColor is only valid if it is "blue" or "red".

Card.propTypes = {
    // cardColor: PropTypes.string.isRequired,
    cardColor: PropTypes.oneOf(['Red', 'Blue', 'Purple', 'Green']).isRequired, /*This is a function*/
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired

}

// Without PropTypes
Card.defaultProps = {
    // cardColor: "blue",
    height: 100,
    width: 100
}


export default Card