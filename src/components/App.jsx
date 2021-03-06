import React, { useState } from "react";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Footer from "./Footer";
import CreateComments from "./CreateComments";
import Comment from "./Comment";
import Upload from "./Upload";
import Preview from "./Preview";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // comment render
  const [comments, setComments] = useState([]);

  function addComment(newComment) {
    setComments((prevComments) => {
      return [...prevComments, newComment];
    });
  }

  // image render
  const [files, setFiles] = useState([]);

  function onSuccess(savedFiles) {
    setFiles(savedFiles);
  }

  // caption render

  // const [captions, setCaptions] = useState([]);

  // function addCaptions(newCaption) {
  //   setCaptions((prevCaptions) => {
  //     return [...prevCaptions, newCaption];
  //   });
  // }

  return (
    <>
      <React.StrictMode>
        <Navigation />
        <Menu />
        <Upload onSuccess={onSuccess} />
        <CreateComments onAdd={addComment} />
        {/* {captions.map((captionItem, index) => {
          return ( */}
        <Preview files={files} />
        {/* );
        })} */}
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
