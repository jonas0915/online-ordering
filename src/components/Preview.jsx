import React from "react";

function Preview({ files }, props) {
  if (!files.length) {
    return null;
  }
  return files.map((file) => (
    <div className="container">
      <div id="preview">
        <img
          className="image-render"
          style={{ maxWidth: "200px" }}
          src={`//localhost:8000/${file.filename}`}
          alt={file.originalname}
        />
        <div>
          <h1>{props.caption}</h1>
          <h1>{props.story}</h1>
        </div>
      </div>
    </div>
  ));
}

export default Preview;
