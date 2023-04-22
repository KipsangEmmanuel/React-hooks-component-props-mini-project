import React from "react";
import Article from "./ArticleList";

function ArticleList(props) {
    const articleComponents = props.posts.map((post) => (
        <Article 
            key={post.id}
            title={post.date || "January 1, 1970"}
            preview={post.preview}
        />
    ));
    return <main>{articleComponents}</main>;
}
export default ArticleList;