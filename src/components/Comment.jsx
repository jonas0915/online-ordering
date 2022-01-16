import React from "react";

function Comment(props) {
  return (
    <>
      <div className="container">
        <div className="comment">
          <h1>{props.title}</h1>
          <p>{props.comment}</p>
        </div>
      </div>
    </>
  );
}

export default Comment;
