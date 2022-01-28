import React from "react";

function Preview({ files }) {
  if (!files.length) {
    return null;
  }
  return files.map((file) => (
    <div className="container">
      <div>
        <img
          className="image-render"
          style={{ maxWidth: "200px" }}
          src={`//localhost:8000/${file.filename}`}
          alt={file.originalname}
        />
      </div>
    </div>
  ));
}

export default Preview;
