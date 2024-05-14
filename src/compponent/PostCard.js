import React from "react";

const PostCard = ({ id, image, title, description, like }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        border: "1px black solid",
        flexDirection: "column",
        width: "300px",
        height: "400px",
      }}
    >
      <img
        src={image}
        width={"100%"}
        height={"50%"}
        style={{
          overflow: "hidden",
        }}
      />
      <h1>{id}</h1>
      <h3> {title}</h3>
      <h3> {description}</h3>
      <h3> {like}</h3>
      <button
        style={{ width: "40px", backgroundColor: "blue", color: "white" }}
      >
        like
      </button>
    </div>
  );
};

export default PostCard;
