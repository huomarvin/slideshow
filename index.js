import React from "react";
import ReactDOM from "react-dom";
import Pictures from "./components/pictures.js";
import Circle from "./components/circle.js";

const data = [
  { src: "img/1.jpeg" },
  { src: "img/2.jpeg" },
  { src: "img/3.jpeg" },
  { src: "img/4.jpeg" },
];

function App({ data, speed }) {
  const { useState, useEffect } = React;
  let [activeKey, setActiveKey] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      activeKey = activeKey + 1 > data.length - 1 ? 0 : activeKey + 1;
      setActiveKey(activeKey);
    }, speed * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "uls" },
      React.createElement(
        "ul",
        {
          id: "img_ul",
          style: { left: -500 * activeKey },
        },
        React.createElement(Pictures, { data })
      ),
      React.createElement(
        "ul",
        { id: "litCir_ul" },
        ...[
          data.map((_dot, index) =>
            React.createElement(Circle, {
              className: index === activeKey ? "active" : "quiet",
              key: index,
            })
          ),
        ]
      )
    )
  );
}

ReactDOM.render(
  React.createElement(App, { data, speed: 1 }),
  document.getElementById("root")
);
