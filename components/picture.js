import React from "react";

function Picture({ img }) {
  return React.createElement(
    "li",
    {},
    React.createElement("img", { alt: img.alt || "", src: img.src })
  );
}

export default Picture;
