
function Star(props) {
    const starIcon = props.isFilled ? "./public/star-filled.png" : "./public/star-empty.png"
    return (
        <img 
            src={`./public/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />

    )
}



export default Star