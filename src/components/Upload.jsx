import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Upload({ onSuccess }) {
  const [files, setFiles] = useState([]);

  function onInputChange(event) {
    setFiles(event.target.files);
  }

  function onSubmit(event) {
    event.preventDefault();

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
  }

  return (
    <>
      <div>
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
          <div className="form-group files">
            <label>Upload Your File </label>
            <input
              type="file"
              onChange={onInputChange}
              className="form-control"
              multiple
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Upload;
