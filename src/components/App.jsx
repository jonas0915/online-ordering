import React, { useState } from "react";
import Navigation from "./Navigation";

import Menu from "./Menu";
import Footer from "./Footer";
import CreateComents from "./CreateComents";
import Comment from "./Comment";

function App() {
  const [comments, setComments] = useState([]);

  function addComment(newComment) {
    setComments((prevComments) => {
      return [...prevComments, newComment];
    });
  }

  return (
    <>
      <React.StrictMode>
        <Navigation />
        <Menu />
        <CreateComents onAdd={addComment} />
        {comments.map((commentItem, index) => {
          return (
            <Comment
              key={index}
              id={index}
              title={commentItem.title}
              comment={commentItem.comment}
            />
          );
        })}

        <Footer />
      </React.StrictMode>
    </>
  );
}

export default App;
