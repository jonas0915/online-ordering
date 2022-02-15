import React, { useState } from "react";

function CreateComments(props) {
  const [comment, setComment] = useState({
    title: "",
    comment: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    setComment((prevComment) => {
      return { ...prevComment, [name]: value };
    });
  }

  function submitComment(event) {
    props.onAdd(comment);
    setComment({
      title: "",
      comment: ""
    });
    event.preventDefault();
  }

  return (
    <>
      <div>
        <form>
          <input
            name="title"
            onChange={changeHandler}
            value={comment.title}
            placeholder="Title"
          ></input>
          <textarea
            name="comment"
            onChange={changeHandler}
            value={comment.comment}
            placeholder="Comments. . . "
            rows="3"
          />
          <button onClick={submitComment} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateComments;
