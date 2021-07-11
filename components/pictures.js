import React from "react";
import Picture from "./picture.js";

function Pictures({ data }) {
  return React.createElement(
    "div",
    { data },
    ...[
      data.map((img, index) =>
        React.createElement(Picture, { key: index, img })
      ),
    ]
  );
}

export default Pictures;
