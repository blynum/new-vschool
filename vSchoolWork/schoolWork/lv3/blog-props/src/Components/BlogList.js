import React from "react"
import data from "../data"
import BlogPost from "./BlogPost"

function BlogList() {
    const posts = data.map((post, index) => {
        return <BlogPost
            key={index}
            title={post.title}
            subTitle={post.subTitle}
            author={post.author}
            date={post.date}

        />
    })
    return (
        <div className="blogList">
            {posts}
        </div>
    )
}

export default BlogList