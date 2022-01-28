import React, { useState } from "react";
import Navigation from "./Navigation";
<<<<<<< HEAD
=======

>>>>>>> 4920f374b5d67a639ef0c5084fdf890c83d4a98c
import Menu from "./Menu";
import Footer from "./Footer";
import CreateComents from "./CreateComents";
import Comment from "./Comment";
<<<<<<< HEAD
import Upload from "./Upload";
import Preview from "./Preview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
=======
>>>>>>> 4920f374b5d67a639ef0c5084fdf890c83d4a98c

function App() {
  const [comments, setComments] = useState([]);

  function addComment(newComment) {
    setComments((prevComments) => {
      return [...prevComments, newComment];
    });
  }

<<<<<<< HEAD
  const [files, setFiles] = useState([]);

  function onSuccess(savedFiles) {
    setFiles(savedFiles);
  }

=======
>>>>>>> 4920f374b5d67a639ef0c5084fdf890c83d4a98c
  return (
    <>
      <React.StrictMode>
        <Navigation />
        <Menu />
<<<<<<< HEAD
        <Upload onSuccess={onSuccess} />
        <CreateComents onAdd={addComment} />
        <Preview files={files} />
        <ToastContainer />
=======
        <CreateComents onAdd={addComment} />
>>>>>>> 4920f374b5d67a639ef0c5084fdf890c83d4a98c
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
