import React from "react"

function BlogPost(props) {
    return (
        <div>
            <h1 className="post--title">{props.title}</h1>
            <h2 className="post--subTitle">{props.subTitle}</h2>
            <p className="post--date">Posted by <span className="post--author">{props.author}</span>  on {props.date}</p>
            <hr />

        </div>
    )
}

export default BlogPost