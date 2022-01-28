import React, { useState } from "react";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Footer from "./Footer";
import CreateComents from "./CreateComents";
import Comment from "./Comment";
import Upload from "./Upload";
import Preview from "./Preview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [comments, setComments] = useState([]);

  function addComment(newComment) {
    setComments((prevComments) => {
      return [...prevComments, newComment];
    });
  }

  const [files, setFiles] = useState([]);

  function onSuccess(savedFiles) {
    setFiles(savedFiles);
  }

  return (
    <>
      <React.StrictMode>
        <Navigation />
        <Menu />
        <Upload onSuccess={onSuccess} />
        <CreateComents onAdd={addComment} />
        <Preview files={files} />
        <ToastContainer />
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
