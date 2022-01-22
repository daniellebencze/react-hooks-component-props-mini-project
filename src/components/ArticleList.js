import React from "react";
import Article from "./Header";

export default function ArticleList({ posts }) {
  const articlePosts = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}
    />
  ));

  return <main>{articlePosts}</main>;
}
