import React from "react";
import posts from "./Posts";
import PostCard from "./PostCard";

const PostList = () => {
  const postCards = posts.map((post) => {
    return (
      <PostCard
        image={post.image}
        id={post.id}
        title={post.title}
        description={post.description}
        like={post.likes}
      />
    );
  });

  return <div style={{ display: "flex", flexWrap: "wrap" }}>{postCards}</div>;
};

export default PostList;
