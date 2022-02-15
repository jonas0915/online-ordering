import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Upload({ onSuccess }, props) {
  const [files, setFiles] = useState([
    // {
    //   photo: ""
    // }
  ]);

  function onInputChange(event) {
    // const { name, value } = event.target;

    // setFiles((prevComment) => {
    //   return { ...prevComment, [name]: value };
    // });
    setFiles(event.target.files);
  }
  const [caption, setCaption] = useState({
    caption: "",
    story: ""
  });
  function addCaption(event) {
    const { name, value } = event.target;

    setCaption((prevCaption) => {
      return { ...prevCaption, [name]: value };
    });
  }

  function submitComment(event) {
    props.onAdd(caption);
    setCaption({
      caption: "",
      story: ""
    });
  }

  function onSubmit(event) {
    // props.onAdd(files);

    // setFiles({
    //   photo: ""
    // });

    const data = new FormData();

    // creating data
    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    axios
      .post("//localhost:8000/upload", data)
      .then((respose) => {
        toast.success("Upload Success");
        onSuccess(respose.data);
      })
      .catch((event) => {
        toast.error("Upload Error");
      });
    event.preventDefault();
  }

  return (
    <>
      <div id="preview" style={{ marginBottom: "100px" }}></div>

      <div>
        <form
          method="post"
          action="#"
          id="#"
          className="uploader"
          onSubmit={onSubmit}
        >
          <div className="form-group files">
            <label>Upload Your File </label>
            <input
              // name="photo"
              type="file"
              // value={files.photo}
              onChange={onInputChange}
              className="form-control"
              multiple
            />
          </div>
          <input
            name="caption"
            onChange={addCaption}
            value={caption.caption}
            placeholder="Caption"
          ></input>
          <textarea
            name="story"
            onChange={addCaption}
            value={caption.story}
            placeholder="Story..."
            rows="2"
          ></textarea>
          <button onClick={submitComment} type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Upload;
